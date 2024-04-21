import React from 'react'
const JavascriptComp = () => {
  const mystyle = {
    color: "purple",
  };
  //Variable
  const num = 5;
  console.log(num);
  // Array 
  var myArr = ["Apple", "Banana", "Mango", "Grapes"];
 
  let Person = {
    Name: "Areeba Farhan",
    Class: "13th",
    Car: "Carola",
  };

  console.log(myArr);

  var flag = true;
  var a = "A";

  return (
    <div>
      <h1>Javascript Comp</h1>
      <p>Number is : (num)</p>

      <p>{myArr[1]}</p>


      {myArr.map((item, index) => {
        return (
          <p style={mystyle} key={index}>
            {item}
          </p>
        );
      })}
     //Object
      <p>{Person.Name}</p>

      {Object.keys(Person).map((item, index) => {
        return (
          <p>{item} : {Person[item]}</p>
        );
      })}

      {flag ? <p>Flag is true</p> : <p>Flag is false</p>}

      {a === "A" ? <p>value is A</p> : a === "B" ? <p>value is B</p> : <p>value is nothing</p>}
    </div>
  );
};

export default JavascriptComp