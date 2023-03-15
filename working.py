from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

# Define allowed origins for CORS
origins = [
    "http://localhost",
    "http://localhost:3000", # update with your React app domain
]

# Add middleware to enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

users = {}


@app.put("/register")
async def register(first_name: str, last_name: str, email: str, password: str, file: UploadFile = File(...)):
    user = {"first_name": first_name, "last_name": last_name, "email": email, "password": password, "file": await file.read()}
    users[email] = user
    return {"message": "User registered successfully."}



@app.put("/register2")
async def register2( face: UploadFile = File(...)):
    if (face):
        return {"message": "Face registered successfully."}
    else:
        return {"message": ""}

print(users)