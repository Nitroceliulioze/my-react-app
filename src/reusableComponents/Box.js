import React from 'react'

const Box = (props) => {
  return (
    <>
    <div className="box">
    <img className="box-image" src={props.data.thumbnail} alt="products"></img>
    <div style={{padding: "10px"}}>
    <p>{props.data.brand}</p>
    <p>{props.data.title}</p>
    <p>{props.data.price}</p>
    <p>{props.data.description}</p>
    </div>
</div></>
)
}

export default Box