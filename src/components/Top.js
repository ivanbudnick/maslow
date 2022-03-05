import React from 'react'
import logo from '../static/maslowLogo.png'

export function Top(user) {
    const {id, name, company, position, avatar} = user.user;
    
  return (
    <div className='flex mb-8'>
        <div className='rounded-br-3xl bg-grey-top p-2'>
            <img className='h-20 tablet:h-14 p-2 tablet:p-1' src={logo} alt="logo"></img>
        </div>
        <div className='rounded-bl-3xl grow px-4 flex items-center shadow'>
            <img className='rounded-bl-lg rounded-tr-lg mx-4 tablet:mx-2 h-14 tablet:h-10' alt="avatar" src={require("../static/" + avatar)}></img>
            <div>
                <h1 className='font-medium text-2xl tablet:text-xl'>{name}</h1>
                <p className='text-sm tablet:text-xs'>Company: {company} - Position: {position}</p>
            </div>
        </div>
    </div>
  )
}
