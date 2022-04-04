import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Reviews from './component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
        <Header></Header>
       <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/home' element={<Home/>}></Route>
          <Route path='/review' element={<Reviews/>} ></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='blog' element={<Blogs/>}></Route>
          <Route path='\about' element={<About/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
       </Routes>
 

    </div>
  );
}

export default App;
