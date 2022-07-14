// import logo from './logo.svg';
import './App.css';
import React, {  useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Home from './Components/PageComponents/Home';
import Coursess from './Components/PageComponents/Coursess';
import Teachers from './Components/PageComponents/Teachers';
import Contacts from './Components/PageComponents/Contacts';
import Abouts from './Components/PageComponents/Abouts';
import Page404 from './Components/Page404/Page404';
import User from './Components/User/User';
import RegiterForm from './Dashbord/Form/RegiterForm';
import LoginForm from './Dashbord/Form/LoginForm';
import ForgotForm from './Dashbord/Form/ForgotForm';




function App() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "E-Learning-Website-design";
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Coursess' element={<Coursess/>} />
          <Route path='/Teachers' element={<Teachers />}/>
          <Route path='/Contact' element={<Contacts/>}/>
          <Route path='/About' element={<Abouts/>}/>
          <Route path='/User/:name' element={<User/>}/>
          <Route path='/*' element={<Page404/>}/>
          <Route path='/RegiterForm' element={<RegiterForm/>}/>
          <Route path='/LoginForm' element={<LoginForm/>}/>
          <Route path='/ForgotForm' element={<ForgotForm/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  );
}

export default App;
