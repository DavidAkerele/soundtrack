import React from 'react';
import Navbar  from './components/Navbar/Navbar';
import Hero  from './components/Hero/Hero';
import Herotwo  from './components/Herotwo/Herotwo';
import Herothree from './components/Herothree/Herothree';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <Hero/>
      <Herotwo />
      <Herothree />
      </div>
    );
  }
}

export default App;
