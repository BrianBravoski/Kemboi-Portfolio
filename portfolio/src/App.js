//import logo from './logo.svg';
import './App.scss';
import { Routes, Route , BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/contact'
import About from './components/about'

const App=()=>
{
  let element= useRoutes([
    {
      path:"/",
      element:<Layout />
    },
    {
      path:"/contact",
      element: <Contact/>
    },
    {
      path:"/about",
      element:<About/>
    }
  ])

  return element;

  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Layout />} />
  //       <Route index element={<Home />} />
  //       <Route path="/contact" element={<Contact/>}  />
  //       <Route path="/contact" element={<Contact />} />
  //     </Routes>
  //   </>
  // )
}
const AppWrapper=()=>{
  return(
    <Router>
      <App/>
    </Router>
  )
}


export default AppWrapper;
