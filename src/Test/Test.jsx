import React from 'react'
import { tests } from '../Tests/tests'
import Product from '../product/Product'

const Test = () => {

  return (
    <div className=''>
      {tests.map((test) => (<Product data={test}/>))}
    </div>
  )
}

export default Test
