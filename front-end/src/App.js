import ReactDom from 'react-dom/client';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Landing from './components/Landing'
import Blogs from './components/Blogs'
import Login from './components/Login'
function App() {

  // <Main />
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
