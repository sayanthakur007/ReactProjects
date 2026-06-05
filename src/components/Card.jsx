import React from 'react'

const Card = (props) => {
  return (
    <div >
       
      <div className='h-[90vh] p-2 m-10 w-[17vw] border-2 rounded-3xl flex justify-between flex-col'>
        <img className='flex h-full object-cover rounded-3xl' src={props.img} alt="" />
       <div className=' flex flex-wrap'>

        <h1 className='text-5xl mb-10 mt-1 font-bold px-12'>{props.tag}</h1>
        <button className='bg-amber-600 rounded-full ml-12  px-12 py-3 border-3'>{props.btn}</button>

       </div>
      </div>
    </div>
  )
}

export default Card
 