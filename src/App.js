import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import HomePage from './pages';
import ContactPage from './pages/contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
