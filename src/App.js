import './App.css';

import Notes from './components/Notes';
import Update from './components/Update';
import MyNotes from './components/MyNotes';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App ">

      <BrowserRouter>
<Navbar/>
      <Routes>
<Route>


<Route exact path='/' element={<Notes/>}></Route>
<Route exact path='/MyNotes' element={<MyNotes/>}></Route>
<Route exact path='/Update' element={<Update/>}></Route>
   

</Route>
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
