import React, { useState, useEffect } from 'react';
const  { getName } = require('country-list');


function NationalityList(){
    // hooks used for list 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.nationalize.io/?name=Hubert")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result.country);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.country_id}>
                {getName(item.country_id)} {Math.round(item.probability * 100)}% 
              </li>
            ))}
          </ul>
        );
      }
    
}

export default NationalityList;