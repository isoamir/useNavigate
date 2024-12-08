import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
        {/* <h1>a</h1>
        <Link to="/" > back to Home</Link> */}
        <div className='error'>
                <img className='img4' src="../src/assets/Group 2 (1).png" alt="" />
               <div className='Amir' >
               <h1 className='text4' >Go Home , <br /> You’re Drunk!</h1>
               <button><Link  to="/">Home</Link></button>
               </div>
        </div>
    </div>
  )
}

export default Notfound