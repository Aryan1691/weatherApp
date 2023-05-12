import React, { useEffect, useState } from 'react';
import "../styles/open.scss"
import SG2 from "../asets/image2.png"
import SG3 from "../asets/image3.png"
import SG4 from "../asets/image4.png";






const Tempapp = () => {
    const[val,updateVal]= useState(null)
    const[search,setSearch]=useState("Mumbai");

  
    useEffect(()=>{
        const fetchApi =async()=>{
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b63caa8fd95c0826b370a0db4220a70d&units=metric`
            const response = await fetch(URL);
        const jSon =await response.json();
        updateVal(jSon.main);
        console.log(jSon.main);
        }
        fetchApi();
    },[search]);
       



  return (
    
   <React.Fragment>
    <div className="box">
        <div className="inputData">
            <input type="search" className='inputField'value={search} onChange={(e)=>{setSearch(e.target.value)}} />
        </div>
   {!val ? (<p>No data found</p>):(<div className='info'>
    <div>
        <h2 className='location'>
        {val.temp>0 && val.temp<25 &&  <img src={SG4} alt="earth" /> }
        {val.temp>25 &&<img src={SG2} alt="earth" />}
        {val.temp<0&&  <img src={SG3} alt="earth" />}
       {search}</h2>
        <h1 className='temp'>{val.temp}°C</h1>
        <p>Humidity:{val.humidity}%</p>
        <h3 className='tempmin_max'>min:{val.temp_min}|max:{val.temp_max}</h3>
    </div>
 

   </div>)}
     
   <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    </div>
 
   </React.Fragment>
  )
}

export default Tempapp;
