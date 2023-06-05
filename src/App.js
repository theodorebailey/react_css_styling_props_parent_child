import React from 'react';
import MyForm from './MyForm';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Year from './Year';
import './style.css';


function App () {

  const headerStyles = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
    color: 'blue',
  };

  const headingStyles = {
    color: 'red',
  };

  const element = (
    <>
      <Header />
      <Sidebar />
      <Header styles={headerStyles} />
      <Sidebar styles={headerStyles} />
      <Header styles={headingStyles} />
      <Sidebar styles={headingStyles} />
      <Footer />
      <MyForm />
      <Year />
    </>
  );

  return element;
}


export default App;