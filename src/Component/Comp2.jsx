import React from "react";
import "../styles/Comp2.css";
const Comp2 = (props) => {
  const myStyles ={
    width: "200px",
    height: "200px",
  };
  return (
    <div>
      <h1 className='heading'>Hello!</h1>
      <p>The value of name is : {props.number}</p>
      <p>The value of fruit is : {props.fruit}</p>
      <p>The value of car is : {props.car}</p>
      <p style={{fontSize: "24px", color: "dark-blue", background: "pink"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem in cupiditate consequatur repudiandae, nulla nobis corporis quas necessitatibus dolorum, explicabo quo quisquam amet aspernatur. Nam labore odit aliquid? Neque.</p>

      <img 
      style = {myStyles}
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
    </div>
  )
}

export default Comp2