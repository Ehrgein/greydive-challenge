import "./App.css";
import TestPage from '../src/pages/TestPage'
import {Link, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path=":testid/:testcliente/:testvideolink/:testeador"  element={<TestPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
