import React from 'react'

const Cards = ({data}) => {
  return (
    <>
    <div className="card bg-neutral text-neutral-content w-96" style={{marginBottom:'20px'}}>
  <div className="card-body items-center text-center" style={{backgroundColor:'lightgray', color:'black', boxShadow:'2px 2px 5px black'}}>
    <h1 className="card-title" style={{fontSize:'25px'}} >{data.name}</h1>
    <h3>{data.Code}</h3>
    <p>{data.education}</p>

  </div>
</div>
    </>
  )
}

export default Cards