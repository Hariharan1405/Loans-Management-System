import React, { useState } from 'react'

function AddLoan() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        loanNumber: '',
        address: '',
        amount: ''
    });

    function handleClick (event){
        event.preventDefault();
        console.log(formData)
    }

  return (
        <div>
            <a>Search</a>
            <form onSubmit={handleClick}>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                    type='text'  
                    placeholder='Enter your First Name' 
                    name='firstName'
                    id='firstName'
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                    type='text'  
                    placeholder='Enter your Last Name' 
                    name='lastName'
                    id='lastName'
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='loanNumber'>Loan Number</label>
                    <input
                    type='number'  
                    placeholder='Enter your Loan Number' 
                    name='loanNumber'
                    id='loanNumber'
                    value={formData.loanNumber}
                    onChange={(e) => setFormData({ ...formData, loanNumber: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='address'>Property Address</label>
                    <input
                    type='text'  
                    placeholder='Enter the Address' 
                    name='address'
                    id='address'
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='amount'>Amount</label>
                    <input
                    type='number'  
                    placeholder='Enter the Loan Amount' 
                    name='amount'
                    id='amount'
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    />
                </div>
                <button type='submit'>Add Loan</button>
            </form>
        </div>
  )
}

export default AddLoan