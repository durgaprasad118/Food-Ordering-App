import {useState} from"react"
import React from "react";

const User = (props) => {
    // can directly pass into the arguments {name} 
    const {name}= props;//destructuring name
    // we can also write props.name
    let [count,setCount]= useState(0);
    let [count2,setCount2]= useState(1);
  return (
    <div className="user-card">
        <h1>{count}</h1>
        <button
        onClick={()=>{
            count++;
            setCount(count);
        }}
        >Click</button>
      <h2>Name: {name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: @dp</h4>
    </div>
  );
};
export default User;