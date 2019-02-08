import React, { Component } from 'react';
import './App.css';
import data from './data/myData';
import Header from './components/Header/Header'
import SmallPanel from './components/SmallPanel/SmallPanel'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header data={data} />
          <div className="row mt-2">
            <div className="col-4">
              <SmallPanel data={data} />
            </div>
            <div className="col-8">
              asddas
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
