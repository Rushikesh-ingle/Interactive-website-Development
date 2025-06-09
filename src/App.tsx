import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BasicSection from './components/BasicSection';
import StylingSection from './components/StylingSection';
import ResponsiveSection from './components/ResponsiveSection';
import InteractiveSection from './components/InteractiveSection';
import ApiSection from './components/ApiSection';
import FormSection from './components/FormSection';
import FrameworkSection from './components/FrameworkSection';
import SassSection from './components/SassSection';
import Footer from './components/Footer';
import './styles/App.scss';

 function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <HeroSection />
        <BasicSection />
        <StylingSection />
        <ResponsiveSection />
        <InteractiveSection />
        <ApiSection />
        <FormSection />
        <FrameworkSection />
        <SassSection />
      </main>
      <Footer/>
    </div>
  );
 }

 export default App;

