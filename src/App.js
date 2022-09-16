import React, {useEffect, useState} from 'react';
import Box from "./reusableComponents/Box";



const App = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json)=> setData(json.products));
  }, []);
  
  console.log(data.products);

  return (
    <> 
    <div className="container">  
    {data.length !== 0
      ? data.map(items => {
        return(
           <Box data={items}/>
        )
      })     
      : "Loading..."}
    </div>
    </> 
  );
};

export default App;