import './App.css';
import TopNavbar from './Components/TopNavbar';
import DeviceSearcher from './Components/DeviceSearcher'
import DeviceTable from './Components/DeviceTable'
import Device from './Components/Device'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Container>
        <DeviceSearcher />
        <DeviceTable />
        <Device /> 
      </Container>
    </div>
  );
}

export default App;
