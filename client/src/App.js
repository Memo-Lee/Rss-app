import './App.css';
import Home from "./pages/index";
import Rss from './rss/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const {path,url} = useRouteMatch();
  return (
    <Router>
        <div className='App'>
            <div className='App-header'>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/apkrss/:rss_id' element={<Rss/>}/>
              </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
