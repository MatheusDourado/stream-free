import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar';

// CSS Global Style 
import './App.css'
// import './assets/css-bootstrap/scss/bootstrap.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <h2>Movies LIB</h2>

            <Outlet/>
        </div>
    );
}

export default App
 