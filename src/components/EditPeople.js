import { useState, useEffect } from 'react';

function EditPeople({setModal, baseUrl, docID}) {

    const [currIndex, setCurrIndex] = useState('');
    const [fullName, setFullName] = useState('');
    const [nameInitials, setNameInitials] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [gender, setGender] = useState('Male');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [designation, setDesignation] = useState('');
    const [type, setType] = useState('Full Time');
    const [joinedDate, setJoinedDate] = useState('');
    const [experience, setExperience] = useState(1);
    const [salary, setSalary] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        // Get employee details using docID
        let getEmpDetails = baseUrl + "/" + String(docID); 

        fetch(getEmpDetails)
        .then(response => response.json())
        .then(data => {
            
            // Converts date into required format yyyy-mm-dd
            const birthday = parseDate(data["birthday"]);
            const joinedDate = parseDate(data["joinedDate"]);

            setCurrIndex(data["empID"]);
            setFullName(data["fullName"]);
            setNameInitials(data["nameInitials"]);
            setDisplayName(data["displayName"]);
            setGender(data["gender"]);
            setBirthday(birthday);
            setEmail(data["email"]);
            setPhone(data["phone"]);
            setDesignation(data["designation"]);
            setType(data["type"]);
            setJoinedDate(joinedDate);
            setExperience(data["experience"]);
            setSalary(data["salary"]);
            setNotes(data["notes"]);
            });
    }, [])

    // Converts date into required format yyyy-mm-dd
    const parseDate = (ISODate) => {
        const newDay = new Date(Date.parse(ISODate));

        const year = newDay.getFullYear();
        const month = () => { 
            if ((newDay.getMonth() + 1).length > 1) {
                return newDay.getMonth() + 1;
            } else {
                return "0" + (newDay.getMonth() + 1);
            }
        }
        const monthValue = month();
        const day = () => { 
            if ((newDay.getDate()) >= 10) {
                return newDay.getDate();
            } else {
                return "0" + (newDay.getDate());
            }
        } 
        const dayValue = day();

        const fullDay = year + "-" + monthValue + "-" + dayValue;

        return fullDay;
    }
    

    const closeModal = () => {
        setModal(false);
        console.log("Modal will be closed");
    }

    const editEmployee = (e) => {
        e.preventDefault();

        const employee = { 
            currIndex, 
            fullName, 
            nameInitials, 
            displayName, 
            gender, 
            birthday,
            email,
            phone,
            designation,
            type,
            joinedDate,
            experience,
            salary,
            notes
        };

        console.log(employee);
        const apiCall = baseUrl + "/update/" + docID;

        fetch(apiCall, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(employee)
        })
        .then(() => {
            console.log("Employee Updated");
            closeModal();
        })

    }
  return (
        <div className='modalContainer'>
        <div className="modal">
            <div className="topBar" onClick={closeModal}>
                <h2>Edit People</h2>
                <div className="closeBtn">
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.85 10.44C11.9446 10.5339 11.9979 10.6617 11.9979 10.795C11.9979 10.9283 11.9446 11.0561 11.85 11.15L11.15 11.85C11.0561 11.9447 10.9283 11.9979 10.795 11.9979C10.6617 11.9979 10.5339 11.9447 10.44 11.85L5.99997 7.41001L1.55997 11.85C1.46609 11.9447 1.33829 11.9979 1.20497 11.9979C1.07166 11.9979 0.943858 11.9447 0.849974 11.85L0.149974 11.15C0.055318 11.0561 0.0020752 10.9283 0.0020752 10.795C0.0020752 10.6617 0.055318 10.5339 0.149974 10.44L4.58997 6L0.149974 1.56C0.055318 1.46612 0.0020752 1.33832 0.0020752 1.205C0.0020752 1.07169 0.055318 0.943888 0.149974 0.850005L0.849974 0.150005C0.943858 0.0553486 1.07166 0.00210571 1.20497 0.00210571C1.33829 0.00210571 1.46609 0.0553486 1.55997 0.150005L5.99997 4.59L10.44 0.150005C10.5339 0.0553486 10.6617 0.00210571 10.795 0.00210571C10.9283 0.00210571 11.0561 0.0553486 11.15 0.150005L11.85 0.850005C11.9446 0.943888 11.9979 1.07169 11.9979 1.205C11.9979 1.33832 11.9446 1.46612 11.85 1.56L7.40997 6L11.85 10.44Z" fill="#212121"/>
                    </svg>

                </div>
            </div>
            <hr className='separator' />

            <form onSubmit={editEmployee} className='form'>
                <div className="inputContainer">
                    <div className="row span">
                        <label htmlFor="fullName" className='formLabel'>Full Name*</label>
                        <input type="text" name="fullName" id="fullName" value={fullName} 
                        onChange={(e) => setFullName(e.target.value)} placeholder='Enter name...' required />
                    </div>

                    <div className="row">
                        <label htmlFor="nameInitials" className='formLabel'>Name with initials*</label>
                        <input type="text" name="nameInitials" id="nameInitials" value={nameInitials} 
                        onChange={(e) => setNameInitials(e.target.value)} placeholder='Enter name with initials...' required />
                    </div>

                    <div className="row">
                        <label htmlFor="displayName" className='formLabel'>Preferred / Display Name</label>
                        <input type="text" name="displayName" id="displayName" value={displayName} 
                        onChange={(e) => setDisplayName(e.target.value)} placeholder='Enter the display name...' />
                    </div>

                    <div className="row">
                        <label htmlFor="gender" className='formLabel'>Gender</label>
                        <select name="gender" id="gender" value={gender} 
                        onChange={(e) => setGender(e.target.value)} placeholder='Enter gender...'>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="row">
                        <label htmlFor="birthday" className='formLabel'>Date of Birth</label>
                        <input type="date" name="birthday" id="birthday" value={birthday} 
                        onChange={(e) => setBirthday(e.target.value)} />
                    </div>

                    <div className="row">
                        <label htmlFor="email" className='formLabel'>Email</label>
                        <input type="email" name="email" id="email" value={email} 
                        onChange={(e) => setEmail(e.target.value)} placeholder='Enter email...' />
                    </div>

                    <div className="row">
                        <label htmlFor="phone" className='formLabel'>Mobile Number</label>
                        <input type="tel" name="phone" id="phone" value={phone} 
                        onChange={(e) => setPhone(e.target.value)} placeholder='Enter mobile number...' />
                    </div>

                    <div className="row">
                        <label htmlFor="designation" className='formLabel'>Designation</label>
                        <input type="text" name="designation" id="designation" value={designation} 
                        onChange={(e) => setDesignation(e.target.value)} placeholder='Enter designation...' />
                    </div>

                    <div className="row">
                        <label htmlFor="type" className='formLabel'>Employee Type</label>
                        <select name="type" id="type" value={type} 
                        onChange={(e) => setType(e.target.value)} placeholder='Enter employee type...'>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Contract Basis">Contract Basis</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="row">
                        <label htmlFor="joinedDate" className='formLabel'>Joined Date</label>
                        <input type="date" name="joinedDate" id="joinedDate" value={joinedDate} 
                        onChange={(e) => setJoinedDate(e.target.value)} />
                    </div>

                    <div className="row">
                        <label htmlFor="experience" className='formLabel'>Experience</label>
                        <select name="experience" id="experience" value={experience} 
                        onChange={(e) => setExperience(e.target.value)} placeholder='Enter employee type...'>
                            <option value={1}>01 Year</option>
                            <option value={2}>02 Years</option>
                            <option value={3}>03 Years</option>
                            <option value={4}>04 Years</option>
                            <option value={5}>05 Years</option>
                        </select>
                    </div>

                    <div className="row">
                        <label htmlFor="salary" className='formLabel'>Salary</label>
                        <input type="number" name="salary" id="salary" value={salary} 
                        onChange={(e) => setSalary(e.target.value)} placeholder='Enter salary...' />
                    </div>

                    <div className="row span">
                        <label htmlFor="notes" className='formLabel'>Personal Notes</label>
                        <textarea name="notes" id="notes" value={notes} 
                        onChange={(e) => setNotes(e.target.value)} cols="30" rows="5" placeholder='Enter personal notes'></textarea>
                    </div>
                </div>
                <div className="btnContainer">
                    <button onClick={closeModal}>Cancel</button>
                    <input type="submit" value="Edit Person" />
                </div>
            </form>

        </div>
    </div>
  )
}

export default EditPeople