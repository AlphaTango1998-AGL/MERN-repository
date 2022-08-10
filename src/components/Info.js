import React from 'react'
import logo from './logo.jpg'

const Info = () => {
    const auth = localStorage.getItem('user');
  return (
    <div className='Register'>
   
        <div className='container emp-profile'>
            <form method="post">
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={logo} alt = "emp" height = "120" width = "120"/>
                    </div>

                    <div className='col-md-6'>
                        <div className="profile-head">
                            <h5>{JSON.parse(auth).fname} {JSON.parse(auth).lname}</h5>
                            <h6>Web Developer</h6>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
   
  )
}

export default Info