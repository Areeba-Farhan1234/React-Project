import React, { useEffect, useRef, useState } from 'react'

const Hooks = () => {
  let a = 4;
  const increment = () => {
    ++a;
    console.log(a);
    setNum(++num);
  };

  let [num, setNum] = useState(0);
  let [name, setName] = useState("");
  let count = useRef();
  count.current = 0;
  console.log(count.current)

  // useEffect(() => {
  //   console.log("changes occured!");
  // });

//   useEffect(() => {
//     console.log("changes website methods!");
//   }, []);
 
// useEffect(() => {
//     console.log("num change methods!");
//   }, [num]);

 
useEffect(() => {
//     setNum(++num);
count.current = count.current +1;
    console.log("num change");
 });

  return (
    <div>
      <h1>Learning Hooks</h1>
      <h2>useState</h2>
      <p>The value of a is : {a}</p>
      {/* <p>The value of num is : {num}</p> */}
      <button onClick={() => increment()}>increment</button>
      <br />
      <input type='text' name='' id='' placeholder='enter value' onChange={(e) => {setName(e.target.value); }}/>
      <p>Name : {name}</p>

      <h2>useEffect</h2>
      <h2>useRef</h2>

    </div>
  );
}

export default Hooks

// 1. useState
// 1. useEffect
// 1. useRef