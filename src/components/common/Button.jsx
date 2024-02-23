import React from 'react'

function Button(props) {
  return (
    <div className="flex flex-wrap bg-white text-dark rounded p-3 hover:bg-slate-50 cursor-pointer shadow-lg font-thin dark:bg-slate-800  dark:hover:bg-slate-700 dark:text-white">
    <div className="w-1/2 flex  items-center pl-2"><h1 className='text-2xl'>{props.logo}</h1></div>
    <div className="w-1/2  text-right pr-2"><h6 className='text-3xl font-bold'>0</h6> <span>ürün</span></div>
  </div>
  )
}

export default Button  