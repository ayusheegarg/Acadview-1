import React, {Component } from 'react';
import './App.css';
import Display from './Display' ;
class App extends Component {
    render(){
        return (
            <div className="background">
            <h1 className ='div-class'> React Form </h1>
            <button className ='button-app'> Click me ! </button>
            <Display name="Ayushee" age="19" month="July" />
            </div>
        );
    }
}
export default App;