import './App.css';
import DataApi from './Components/DataApi';
import Logo from './Components/Logo';
import Navbar from './Components/Navbar';
import SearchBox from './Components/SearchBox';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Search from './Components/Search';


function App() {

  return (
    <Router>
      <div className="App">
        <Logo/>
        <SearchBox/>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<DataApi title="India"/>}/>
            <Route path="/PhotoHub" element={<DataApi title="India"/>}/>
            <Route path="/mountain" element={<DataApi title="Mountain"/>}/>
            <Route path="/goa" element={<DataApi title="Goa"/>}/>
            <Route path="/beach" element={<DataApi title="Beach"/>}/>
            <Route path="/bird" element={<DataApi title="Bird"/>}/>
            <Route path="/food" element={<DataApi title="Food"/>}/>
            <Route path="/search" element={<DataApi title="India"/>}/>
            <Route path="/search/:id" element={<Search/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
