import React, { useState } from 'react';
import './App.css';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Nav from './Components/Nav/nav';
import Portfolio from './Pages/Portfolio/portfolio';
import Resume from './Pages/Resume/resume';
import Footer from './Components/Footer/footer.js';



function App() {
  const [categories] = useState([
    { name: 'about'},
    { name: 'work'},
    { name: 'contact' },
    { name: 'resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  console.log('current Category', currentCategory);

  const renderDifferentPages = () => {
    switch(currentCategory) {
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Contact />
      case 'resume':
        return <Resume />
      default:
        return <About />
    }
  } 

  return (
    <div>
      <Nav
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        {renderDifferentPages() }
      </main>
      <Footer/>
    </div>
  );
}

export default App;