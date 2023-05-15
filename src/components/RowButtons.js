import React from 'react'

function RowButtons({setModal, docID, setEditPerson, baseUrl, setRefresh}) {
    const openModal = () => {
        setEditPerson(docID);
        setModal(true);
        console.log("Modal will be opened");
    }

    const deleteEmployee = () => {
        // Get employee details using docID
        let getEmpDetails = baseUrl + "/" + String(docID); 

        fetch(getEmpDetails, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"}
        })
        .then(response => response.json())

        let now = new Date();
        setRefresh(now); // Just so the useEffect fires
        // setModal(false); // Just so the useEffect fires

    }
  return (
    <div className='buttonWrapper'>
        <button className='rowButton' id='edit' onClick={openModal}>Edit</button>
        <button className='rowButton' id='delete' onClick={deleteEmployee}>Delete</button>
    </div>
  )
}

export default RowButtons