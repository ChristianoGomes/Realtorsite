"use client"

import React from 'react'
import ExampleServer from './ExampleServer';

const ExampleClient = () => {
    console.log("ExampleClient");
    
  return (
    <div>
      <p>this is a client component</p>
      <ExampleServer />
    </div>
  )
}

export default ExampleClient
