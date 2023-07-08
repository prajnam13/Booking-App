import React from 'react'

function form() {
  return (
    <div className='form'>
        <div>
        <label id='fname'>First Name : </label>
        <input id='fname' type='text'></input>
        </div>

        <div>
        <label id='lname'>Last Name:</label>
        <input id='lname' type='text'></input>
        </div>

        <div>
        <label id='email'>Email : </label>
        <input id='email' type='text'></input>
        </div>

        <div>
        <label id='phone'>Phone:</label>
        <input id='phone' type='text'></input>
        </div>

        <div>
        <label id='textbox'>Name:</label>
        <input id='textbox' type='text'></input>
        </div>
    </div>
  )
}

export default form