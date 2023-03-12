from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 
import requests
from werkzeug.utils import secure_filename
from flask_cors import CORS,cross_origin
import os
from deepface import DeepFace
import pickle



# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
CORS(app)
app.config['CORS_ORIGINS'] = ['http://localhost:3000']
cors = CORS(app, resources={r"/*": {"origins": ["http://localhost:3000","http://localhost:5000"]}})
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# User Class/Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Fname = db.Column(db.String, unique=False, nullable=False)
    Lname = db.Column(db.String, unique=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
  

    def __init__(self, Fname,Lname, email, password):
      self.Fname = Fname
      self.Lname = Lname
      self.email = email
      self.password = password
      

# User Schema
class UserSchema(ma.Schema):
  class Meta:
    fields = ('id', 'Fname','Lname', 'email', 'password')

# Init schema
user_schema = UserSchema()
users_schema = UserSchema(many=True)

# Signup

@app.route('/signup', methods=['POST'])
@cross_origin(origins='*', headers =['Content-Type','Authorization'])
def signup():
  Fname = request.form['Fname']
  Lname = request.form['Lname']
  email = request.form['email']
  password = request.form['password']
 

  existing_user = User.query.filter_by(Fname=Fname).first()
  if existing_user:
    return jsonify({'message': 'Fname already taken'}), 409

  existing_email = User.query.filter_by(email=email).first()
  if existing_email:
    return jsonify({'message': 'Email already taken'}), 409

  

  user = User(Fname,Lname, email, password)

  db.session.add(user)
  db.session.commit()
  
  response =user_schema.jsonify(user)
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')

  return response
# Login
@app.route('/login', methods=['POST'])
def login():
  Fname = request.json['Fname']
  password = request.json['password']

  user = User.query.filter_by(Fname=Fname).first()
  if not user:
    return jsonify({'message': 'Invalid Fname or password'}), 401

  if user.password != password:
    return jsonify({'message': 'Invalid Fname or password'}), 401

  return user_schema.jsonify(user)


@app.route('/upload-pdf', methods=['POST'])
def upload_pdf():
    file = request.files['pdf']
    file.save(f'/path/to/save/{file.filename}')


    
    model=pickle.load(open('.sav','rb'))


    url = "https://pan-card-verification1.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_pan"

    payload = {
        "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",
        "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        "data": {"id_number": "BHXPS7083N"}
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "0768fbb2bemsh0762c21b0ca177bp17cc16jsn578413086999",
        "X-RapidAPI-Host": "pan-card-verification1.p.rapidapi.com"
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    print(response)
    return response

# Run Server
if __name__ == '__main__':
  app.run(debug=True)