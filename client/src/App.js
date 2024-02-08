import Header from "./components/header/Header";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Post from "./components/post/Post";

function App() {
  const user=false;
  return (
    
    <>
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
  
        <Route path="/login"  element={<Login/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/post" element={<Post/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
