import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import data from "../util/data";

const Home = () => {
  console.log(data);
  const head = "diana"
  return (
    <>
      {/* header */}
      <Header data={head}/>
      <h1>HOME</h1>
      {/* Cards */}
      {data.map((item) => {
        return (
          <div
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid black",
            }}
          >
            <h1>{item.id}</h1>
            <p>{item.title}</p>
          </div>
        );
      })}

      <Footer />
      {/* footer */}
    </>
  );
};

export default Home;
