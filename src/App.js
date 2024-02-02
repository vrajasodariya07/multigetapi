
import './App.css';

import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Posts from './Component/Posts';
import Comments from './Component/Comments';
import Albums from './Component/Albums';
import Todos from './Component/Todos';
import Users from './Component/Users';
import Photos from './Component/Photos';
import Home from './Component/Home';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>

      {/* <Home></Home> */}
      {/* <Posts></Posts> */}
      {/* <Comments></Comments> */}
      {/* <Albums></Albums> */}
      {/* <Photos></Photos> */}
      {/* <Todos></Todos> */}
      {/* <Users></Users> */}



    </>
  );
}

export default App;
