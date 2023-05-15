import React from 'react'
import Select from "react-select"

function TableOptions() {
    const options = [
        {value: "All", label: "All"},
        {value: "Full Time", label: "Full Time"},
        {value: "Part Time", label: "Part Time"},
        {value: "Contract Basis", label: "Contract Basis"},
        {value: "Other", label: "Other"}
    ]

    const colorStyles = {
        control: (styles) => ({...styles, cursor: "pointer"})
    }

    const handleChange = (selectedOption) => {
        console.log("Handle Change: ", selectedOption);
        // Here the value selected by this would trigger an API call
        // ! CODE THAT BIT
    }

    const openModal = () => {
        console.log("Modal will be opened");
        // This would open up a modal that adds people
        // ? Way to do it is to have a useState that defaults to false, and will be true when this is clicked
        // ? Opening the modal
        // ?
    }
  return (
    <div className='tableOptions'>
        <Select className='selectDropdown' 
            options={options} 
            placeholder="Employee Type" 
            onChange={handleChange}
            styles={colorStyles} />
        <input className='addPeople' type="button" onClick={openModal} value="Add People"/>
    </div>
  )
}

export default TableOptions