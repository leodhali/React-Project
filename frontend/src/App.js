import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customer from './Customer';
import Home from './Home';
import Create from './create';
import Read from './Read';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} /> 
          <Route path='/customer' element={<Customer />} />
          <Route path='/create' element={<Create/>} />
          <Route path='/read/:cust_id' element={<Read/>} />
        </Routes>
      </BrowserRouter>
      <div>
        
      </div>
    </div>
    
  );
}

export default App;