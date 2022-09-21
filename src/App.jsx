import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar';



// CSS Pos-Processado Style 
import './App.css'

function App() {
    return (
        <div className="App">
            <Navbar/>

            <Outlet/>
        </div>
    );
}

export default App
 