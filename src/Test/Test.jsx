import React from 'react'
import { tests } from '../Tests/tests'
import Product from '../product/Product'
import './style.css'
const Test = () => {

  return (
    <div className='display_tests'>
      {tests.map((test) => (<Product data={test}/>))}
    </div>
  )
}

export default Test
