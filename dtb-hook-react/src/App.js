import React from 'react'
import DTHUseState from './components/DTHUseState'
import DTHUseEffect from './components/DTHUseEffect'
import DTHUseContext from './components/DTHUseContext'


export default function 
() {
  return (
    <div className='container boder mt-3'>
      <h1 className='text-center'>Đỗ Trọng Huy - Hook </h1>
      <hr/>
      <DTHUseState/>
      <hr/>
      <DTHUseEffect/>
      <hr/>
      <DTHUseContext/>
    </div>
  )
}
