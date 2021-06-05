import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Project from './Project';
import Footer from './Footer';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import { useState } from 'react';

function App() {
  const [currentlyShown, setCurrentlyShown] = useState('About')
  return (
    <div className='appcontainer'>
      <Header setCurrentlyShown={setCurrentlyShown} />
      <div class="hero"></div>
      {currentlyShown === 'About' ?
        <About /> : null
      }
      {currentlyShown === 'Portfolio' ?
        <Portfolio /> : null
      }
      {currentlyShown === 'Contact' ?
        <Contact /> : null
      }
      {currentlyShown === 'Resume' ?
        <Resume /> : null
      }
      <Footer />

    </div>
  );
}

export default App;
