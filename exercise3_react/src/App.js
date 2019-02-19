import React, {Component } from 'react';
import './App.css';
import Display from './Display' ;
class App extends Component {
    render(){
        return (
            <div className="background">
            <h1 className ='div-class'> My React Form! </h1>
            <button className ='button-app'> Switch users </button>
            <Display name="Nikita" age="20" month="March" />
            <Display name="Trishali" age="19" month="February" />
            </div>
        );
    }
}
export default App;