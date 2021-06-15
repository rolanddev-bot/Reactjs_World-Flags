import React from 'react';

const Card = (props) => {
    
    const {country} = props;
     
     const numberFormat=(x)=>{
         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }

    return (
        <li className="card">
          <img src={country.flag} alt="Flag" />
            <div className="data-container">
                <ul>
                  <li className="">{country.name}</li>
                  <li className="">{country.capital}</li>
                  <li className="">{country.region}</li>
                  <li className="">Pop. {numberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;