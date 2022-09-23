import './App.css';
import Container from './Container';
// import NavBar from './NavBar';
import StudentTable from './StudentTable';
import studentData from './util/studentData'

function App() {
  return (
    <Container>
      {/* <NavBar/> */}
      <StudentTable StudentArr = {studentData()}/>
     </Container>
    
  );
}

export default App;
