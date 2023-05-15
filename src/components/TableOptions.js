import React from 'react'
import Select from "react-select"

function TableOptions({setModal, setFilter}) {
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
        setFilter(selectedOption["value"]);
    }

    const openModal = () => {
        setModal(true);


        console.log("Modal will be opened");
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