import React from 'react'
const mycomponent = ({number, fruit}) => {
  return (
    <>
     <div className='my_comp'>my first component</div>
     <h1>The value of MyComp is : {number} </h1>
     <h1>The quality of MyComp is : {fruit} </h1>
    </>
  )
}

export default mycomponent