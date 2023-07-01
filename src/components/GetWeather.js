import  React, {useEffect, useState} from 'react'
import './style.css'

 
const GetWeather = () => {

    const [city, setCity]= useState(null);  
    const [search, setSearch] = useState("Jamshedpur");
    
    useEffect(() => {
    const fetchApi = async () => {
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=56de3f1cd28ee6945595555a0afb69af`;
   const response = await fetch(url); 
    const resJson = await response.json();
   // console.log(resJson); 
    setCity(resJson.main);
    
    };
    
    fetchApi();
    
    },[search])
    

return(
<>
<div className="box">
<div className="inputData">
<p>Search Weather By City Name!</p><br/>
<input
type="search"
value={search}
className="inputFeild"
onChange={(event) =>{ setSearch(event.target.value) } } />
</div>

{!city ? (

<p className="errorMsg"> No Data Found </p>

)

: (

    <div>
    <div className="info">
    <h2 className="Location"><i className="fas fa-street-view"></i> {search}</h2>
    <h1 className="temp"> {city.temp}  °Cel</h1>
    <h3 className="tempmin_max"> Min: {city.temp_min}  °Cel | Max: {city.temp_min}  °Cel </h3>
    </div>
    <div className = "wave -one"></div>
    <div className="wave -two"></div>
    <div className = "wave -three"></div>

    </div>
    )}

        </div>

</>
    )}
    export default GetWeather;