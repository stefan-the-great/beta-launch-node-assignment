import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
        

function Table({tableData}) {    
  return (
    <div className="tableContainer">
        <DataTable value={tableData} 
            paginator rows={5} 
            rowsPerPageOptions={[5, 10, 25, 50]} 
            paginatorTemplate={{ layout: 'PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown' }} 
            tableStyle={{ width: '90vw', border: '1px solid #E0E0E0'}}>
                <Column field="displayName" header="Display Name" style={{ width: '20%' }} sortable  />
                <Column field="empID" header="Emp. ID" style={{ width: '10%' }} sortable  />
                <Column field="designation" header="Designation" style={{ width: '25%' }} />
                <Column field="type" header="Emp. Type" style={{ width: '20%' }} />
                <Column field="experience" header="Experience" />
                <Column field="links" header="" />
        </DataTable>
    </div>
  )
}

export default Table