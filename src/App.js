import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateUser from "./components/CreateUser";
import ListUser from "./components/ListUser";
import NavBar from "./pages/NavBar";
import Footor from './pages/Footor';
import styles from './App.css';
const App = () => {
  //1. use variable
  return (
    <div className="App">
    
    <BrowserRouter>
      <NavBar/>
        <h4 style={{textAlign:"center"}}>Crud using React JS and json db </h4> 
        <button className="btn position-absolute top-20 end-0"> <Link class="btn btn-info" to="/create">+</Link></button>
        <br/>
       
        <Routes>
          <Route index element={<ListUser/>} />
          <Route path="/" element={<ListUser/>} />
          <Route path="/create" element={<CreateUser/>} />
          <Route  path="/:id/edit" element={<CreateUser/>} />
        </Routes>
        <Footor/>
    </BrowserRouter>
    </div>
  );
}

export default App;
