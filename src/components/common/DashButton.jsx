import React from 'react'

function DashButton(props) {
    return (
        <>
        <div className="bg-white text-dark rounded p-3  hover:bg-slate-50 cursor-pointer shadow-lg font-thin dark:bg-slate-800  dark:hover:bg-slate-700 dark:text-white">
            <div className='flex flex-wrap'>
            <div className="w-1/2 flex  items-center pl-2"><h1 className='text-2xl'>{props.logo}</h1></div>
                <div className="w-1/2  text-right pr-2">{props.icerik}</div>
            </div>
            </div>
       
        </>
    )
}

export default DashButton