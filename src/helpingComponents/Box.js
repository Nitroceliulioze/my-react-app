import React from "react";


const Box = (props) => {
    return (
        <>
        {/* Cards */}

          <div
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid black",
            }}
          >
            <h1>{props.value.id}</h1>
            <p>{props.value.title}</p>
          </div>
      </>
     );
    
}

export default Box;