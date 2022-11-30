import './App.css';
import Login from './Components/Login';
import{Routes,Route}from'react-router-dom';
import Registration from './Components/Registration';
import Details from './Components/Details';
import Edit from './Components/Edit';
import Page from './Components/Page';
import Headr from './Components/Headr';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/details'element={<Details/>}/>
        <Route path='/Edit'element={<Edit/>}/>
        <Route path='/header' element={<Headr/>}/>
      </Routes>   
    
     
    </div>
  );
}

export default App;
