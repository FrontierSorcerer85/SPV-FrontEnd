import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home/Home';
import Login from './componentes/Formularios/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: false
    };
  }

  render() {
    return (
      <div>
        <Header />
        <>
        { this.state.log ? <Home /> : <Login /> }
        </>
        <Footer />
      </div>
    );
  }
}
