import './App.css';
import TopNavbar from './Components/TopNavbar';
import DeviceTable from './Components/DeviceTable'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Container>
        <DeviceTable />
      </Container>
    </div>
  );
}

export default App;
