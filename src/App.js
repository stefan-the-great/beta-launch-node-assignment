import './App.css';
import { useState, useEffect } from 'react';
import AddPeople from './components/AddPeople';
import Menu from './components/Menu';
import Table from './components/Table';
import TableOptions from './components/TableOptions';
import EditPeople from './components/EditPeople';
import RowButtons from './components/RowButtons';

function App() {
    const BASE_URL = "http://localhost:5000/employees";

  const [openAddPeopleModal, setAddModal] = useState(false);
  const [openEditPeopleModal, setEditModal] = useState(false);
  const [editPerson, setEditPerson] = useState();
  const [filter, setFilter] = useState();
  const [currIndex, setIndex] = useState();
  const [refresh, setRefresh] = useState();

  // Getting table data from the api
  const [tableData, setTableData] = useState();

  const addDataOptions = (tableData) => {
    tableData.forEach(employee => {
      employee["experience"] = employee["experience"] + " Years";
      employee["links"] = <RowButtons setModal={setEditModal} docID={employee["_id"]} setEditPerson={setEditPerson} baseUrl={BASE_URL} setRefresh={setRefresh} />;
    });
  }

    useEffect(() => {
        // var filter = "All";
        console.log(filter);
        let apiCallUrl = BASE_URL + "/";
        
        if(filter !== undefined){
            apiCallUrl = BASE_URL + `/?filter=${filter}`;
        }

        fetch(apiCallUrl)
        .then(response => response.json())
        .then(data => {
          addDataOptions(data);
          setTableData(data)
        })

        console.log("API CALL: ", apiCallUrl);
        
    }, [filter, openAddPeopleModal, openEditPeopleModal, refresh]);

    useEffect(()=> {
        // Get currIndex
        let apiCallUrl = BASE_URL + "/currId";
        fetch(apiCallUrl)
        .then(response => response.json())
        .then(data => {setIndex(data.currIndex)});

    }, [openAddPeopleModal]);

  return (
    <div className="App">
      {openAddPeopleModal && <AddPeople setModal={setAddModal} currIndex={currIndex} baseUrl={BASE_URL} />}
      {openEditPeopleModal && <EditPeople  setModal={setEditModal} docID={editPerson} baseUrl={BASE_URL} />}
      
      
      <Menu/>
      <TableOptions setModal={setAddModal} setFilter={setFilter} />
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
