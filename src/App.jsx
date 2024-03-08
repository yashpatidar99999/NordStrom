import react from 'react';
import Deals from '../components/Deals';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Items from '../components/Items';
import Footer from '../components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <hr />
    <main>
       <Hero/>
       <Deals/>
       <Items/>
    </main>
    <Footer/>
    </>
  )
}

export default App
