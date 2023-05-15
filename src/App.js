import './App.css';
import Menu from './components/Menu';
import Table from './components/Table';
import TableOptions from './components/TableOptions';

function App() {
  return (
    <div className="App">
      <Menu/>
      <TableOptions/>
      <Table/>
    </div>
  );
}

export default App;
