import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import React, {  useState } from 'react'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


function App() {

  const pageSize=6;
  const apikey = `${process.env.REACT_APP_NEWS_API}`;


  const [progress, setProgress] = useState(0);


  return (
     <>
      <div>
    
        <Router>
            <Navbar/>
            <Sidebar/>
            {/*link for toploadbar  https://www.npmjs.com/package/react-top-loading-bar */ }
            <LoadingBar
              height={5}
              color='#8F00FF'
              progress={progress}
              
            />
            <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={6} country="us" category="general"/>} ></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={6} country="us" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={6} country="us" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={6} country="us" category="general"/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={6} country="us" category="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={6} country="us" category="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={6} country="us" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={6} country="us" category="technology"/>}></Route>

            
        </Routes>
        </Router>
        <Footer/>
      </div>
     </>
  );
}

export default App;
