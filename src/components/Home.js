import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Box from "../helpingComponents/Box";
import data from "../util/data";

const Home = () => {
 
  const a = "jai"
  return (
    <>
      {/* header */}
      <Header/>
      <h1>HOME</h1>
      {data.map((item) => {
        return <Box  value={item}/>;
      })};
      
      {/* footer */}
      <Footer dat={a}/>      
    </>
  );
};

export default Home;
