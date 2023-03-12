import GaugeChart from 'react-gauge-chart'
import React from 'react'


export default function Gauge() {
    let perc=Math.floor((Math.random()*100))
  return (
    <div>
    <div className='absolute ml-72 mt-52 flex flex-col scale-125'>
        <GaugeChart id="gauge-chart3" 
        nrOfLevels={30} 
        colors={['#5BE12C', '#F5CD19', '#EA4228']}
        arcWidth={0.4} 
        percent={perc/100} 
        hideText={['false']}
        />
        <h1 className= 'flex text-purple-900 text-8xl justify-center content-center'>{perc}%</h1>
    </div>
    <div>
    
    </div>
    </div>
  )
}
