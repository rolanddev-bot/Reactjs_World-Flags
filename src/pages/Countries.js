import React,{useState, useEffect}from 'react';
import axios from 'axios';
import Card from '../components/Card'

const Countries = () => {

    const [Data, setData] = useState([]);
    const [sortedData, setsortedData] = useState([]);
    const [playOnce, setplayOnce] = useState(true);
    const [RangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setselectedRadio] = useState('');
    const radios= ["Africa","America","Europe","Asia","Oceania"];
   
   useEffect(() => {
       if(playOnce){
           axios.get("https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;region").then((res)=>{
               setData(res.data);
               setplayOnce(true);
           });
       

       }
       
      

        const sortedCountry=()=>{
            const countryObj=Object.keys(Data).map((i)=>Data[i]);
            const sortedArray=countryObj.sort((a,b)=>{
                return b.population - a.population;
            });

            sortedArray.length=RangeValue;
            setsortedData(sortedArray);

        };  
        sortedCountry();


   },[Data, playOnce,RangeValue]); 

    return (
        <div className="countries">
           <div className="sort-container">
               <input type="range" min="1" max="250" value={RangeValue} 
               onChange={(e)=>setRangeValue(e.target.value)}/>

               <ul>
                   {radios.map((radio)=>{
                       return(
                           <li key={radio}>
                             <input type="radio" value={radio} id={radio} 
                             checked={radio===selectedRadio} onChange={(e)=>setselectedRadio(e.target.value)}/>
                             <label htmlFor="">{radio}</label>
                           </li>
                       )
                   })}
               </ul>
           </div>
           <div className="cancel">
               <h5 onClick={()=>setselectedRadio('')}>Annuler la recherche</h5>
            </div>
            
          <ul className="countries-list">
             {sortedData.filter((country)=>country.region.includes(selectedRadio)).map((country)=>(
             <Card country={country}  key={country.name}/>
             ))}
         </ul>
           
        </div>
    );
};

export default Countries;