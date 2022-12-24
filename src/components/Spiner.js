import React, { Component } from 'react'
import loading from './loading.gif'
export class Spiner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img style={{height: '5rem'}} src = {loading} alt='loading'/>
      </div>
    )
  }
}

export default Spiner
