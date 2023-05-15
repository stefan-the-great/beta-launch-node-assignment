import React from 'react'

function AddPeople({setModal}) {
    const closeModal = () => {
        setModal(false);
        console.log("Modal will be closed");
    }

  return (
    <div className='modalContainer'>
        <div className="modal">
            <div className="topBar" onClick={closeModal}>
                <h2>Add People</h2>
                <div className="closeBtn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.85 10.44C11.9446 10.5339 11.9979 10.6617 11.9979 10.795C11.9979 10.9283 11.9446 11.0561 11.85 11.15L11.15 11.85C11.0561 11.9447 10.9283 11.9979 10.795 11.9979C10.6617 11.9979 10.5339 11.9447 10.44 11.85L5.99997 7.41001L1.55997 11.85C1.46609 11.9447 1.33829 11.9979 1.20497 11.9979C1.07166 11.9979 0.943858 11.9447 0.849974 11.85L0.149974 11.15C0.055318 11.0561 0.0020752 10.9283 0.0020752 10.795C0.0020752 10.6617 0.055318 10.5339 0.149974 10.44L4.58997 6L0.149974 1.56C0.055318 1.46612 0.0020752 1.33832 0.0020752 1.205C0.0020752 1.07169 0.055318 0.943888 0.149974 0.850005L0.849974 0.150005C0.943858 0.0553486 1.07166 0.00210571 1.20497 0.00210571C1.33829 0.00210571 1.46609 0.0553486 1.55997 0.150005L5.99997 4.59L10.44 0.150005C10.5339 0.0553486 10.6617 0.00210571 10.795 0.00210571C10.9283 0.00210571 11.0561 0.0553486 11.15 0.150005L11.85 0.850005C11.9446 0.943888 11.9979 1.07169 11.9979 1.205C11.9979 1.33832 11.9446 1.46612 11.85 1.56L7.40997 6L11.85 10.44Z" fill="#212121"/>
                    </svg>

                </div>

            </div>
            <hr className='separator' />
            <form action="" method="post" className='form'>
                <div className="inputContainer">
                    <div className="row span">
                        <label htmlFor="fullName" className='formLabel'>Full Name*</label>
                        <input type="text" name="fullName" id="fullName" placeholder='Enter name...' required />
                    </div>

                    <div className="row">
                        <label htmlFor="nameInitials" className='formLabel'>Name with initials*</label>
                        <input type="text" name="nameInitials" id="nameInitials" placeholder='Enter name with initials...' required />
                    </div>

                    <div className="row">
                        <label htmlFor="displayName" className='formLabel'>Preferred / Display Name</label>
                        <input type="text" name="displayName" id="displayName" placeholder='Enter the display name...' />
                    </div>

                    <div className="row">
                        <label htmlFor="gender" className='formLabel'>Gender</label>
                        <input type="text" name="gender" id="gender" placeholder='Enter gender...' />
                    </div>

                    <div className="row">
                        <label htmlFor="birthday" className='formLabel'>Date of Birth</label>
                        <input type="date" name="birthday" id="birthday" />
                    </div>

                    <div className="row">
                        <label htmlFor="email" className='formLabel'>Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter email...' />
                    </div>

                    <div className="row">
                        <label htmlFor="phone" className='formLabel'>Mobile Number</label>
                        <input type="tel" name="phone" id="phone" placeholder='Enter mobile number...' />
                    </div>

                    <div className="row">
                        <label htmlFor="designation" className='formLabel'>Designation</label>
                        <input type="text" name="designation" id="designation" placeholder='Enter designation...' />
                    </div>

                    <div className="row">
                        <label htmlFor="type" className='formLabel'>Employee Type</label>
                        <input type="text" name="type" id="type" placeholder='Enter employee type...' />
                    </div>

                    <div className="row">
                        <label htmlFor="joinedDate" className='formLabel'>Joined Date</label>
                        <input type="date" name="joinedDate" id="joinedDate" />
                    </div>

                    <div className="row">
                        <label htmlFor="experience" className='formLabel'>Experience</label>
                        <input type="text" name="experience" id="experience" placeholder='Enter experience...' />
                    </div>

                    <div className="row">
                        <label htmlFor="salary" className='formLabel'>Salary</label>
                        <input type="number" name="salary" id="salary" placeholder='Enter salary...' />
                    </div>

                    <div className="row span">
                        <label htmlFor="notes" className='formLabel'>Personal Notes</label>
                        <textarea name="notes" id="notes" cols="30" rows="5" placeholder='Enter personal notes'></textarea>
                    </div>
                </div>
                <div className="btnContainer">
                    <button onClick={closeModal}>Cancel</button>
                    <input type="submit" value="Add People" />
                </div>
            </form>

        </div>
    </div>
  )
}

export default AddPeople