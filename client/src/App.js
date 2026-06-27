import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './Components/Homepage/homepage';
import { AddTask } from './Components/Addtask/addtask';
import { Taskdetail } from './Components/Taskdetail/taskdetail';
import { Taskupdate } from './Components/Update/taskupdate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addtask' element={<AddTask/>}/>
    <Route path='/taskdetail' element={<Taskdetail/>}/>
    <Route path='/taskupdate/:id' element={<Taskupdate/>}/>
    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
