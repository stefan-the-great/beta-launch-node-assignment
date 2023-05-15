import React from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
        

function Table() {

    const data = [
    {
        name: "Corey Curtis",
        id: 1,
        designation: "Senior Developer",
        type: "Full Time",
        experience: 2,
        links: [<button>edit</button> , "delete"]
    },
    {
        name: "Alfonso Stanton",
        id: 2,
        designation: "Senior Front-End Developer",
        type: "Part Time",
        experience: 3,
        links: [<button>edit</button> , "delete"]
    },
    {
        name: "Justin Aminoff",
        id: 3,
        designation: "Senior Developer",
        type: "Contract Basis",
        experience: 2
    },

    {
        name: "Leo Geidt",
        id: 4,
        designation: "User Experience Designer",
        type: "Other",
        experience: 1
    },

    {
        name: "Jaydon Workman",
        id: 5,
        designation: "Senior Developer",
        type: "Part Time",
        experience: 3
    },

    {
        name: "Buben Levin",
        id: 6,
        designation: "Senior Developer",
        type: "Contract Basis",
        experience: 3
    }, {
        name: "Omar Passaquindici Arcand",
        id: 7,
        designation: "Senior Developer",
        type: "Full Time",
        experience: 2
    },
    {
        name: "Phillip Mango",
        id: 8,
        designation: "Senior Developer",
        type: "Contract Basis",
        experience: 5
    }, {
        name: "Martin Workman",
        id: 9,
        designation: "Sales Officer",
        type: "Full Time",
        experience: 2
    }, {
        name: "Ruben Dokidis",
        id: 10,
        designation: "Senior Developer",
        type: "Full Time",
        experience: 6
    }, {
        name: "Ruben Dokidis",
        id: 11,
        designation: "Guest Admin",
        type: "Part Time",
        experience: 9,
        links: [<button>edit</button> , "delete"]
    }
];

  return (
    <div className="tableContainer">
        <DataTable value={data} 
            paginator rows={5} 
            rowsPerPageOptions={[5, 10, 25, 50]} 
            paginatorTemplate={{ layout: 'PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown' }} 
            tableStyle={{ width: '90vw', border: '1px solid #E0E0E0'}}>
            <Column field="name" header="Display Name" style={{ width: '20%' }} sortable  />
            <Column field="id" header="Emp. ID" style={{ width: '10%' }} sortable  />
            <Column field="designation" header="Designation" style={{ width: '25%' }} />
            <Column field="type" header="Emp. Type" style={{ width: '20%' }} />
            <Column field="experience" header="Experience" />
            <Column field="links" header="" />
        </DataTable>
    </div>
  )
}

export default Table