import './App.css';
import { useState } from 'react';
import AddPeople from './components/AddPeople';
import Menu from './components/Menu';
import Table from './components/Table';
import TableOptions from './components/TableOptions';

function App() {
  const [openAddPeopleModal, setAddModal] = useState(false)
  return (
    <div className="App">
      {openAddPeopleModal && <AddPeople setModal={setAddModal} />}
      
      <Menu/>
      <TableOptions setModal={setAddModal}/>
      <Table/>
    </div>
  );
}

export default App;
