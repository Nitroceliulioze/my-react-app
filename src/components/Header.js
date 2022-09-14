import React from 'react'

function Header(props) {
    console.log(props);
    return (
        <div> Header {props.data}</div>
    )
}

export default Header