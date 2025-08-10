import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Homepage from './homepage';
import Admin from './admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
