import React, {Component } from 'react';
require('react');

class Display extends Component{
    render(){
        return(
            <div className= 'app1'>
            <div> Hi...! I am {this.props.name}. My age is {this.props.age} and I was born in {this.props.month}</div>
            //<input type= "text" placeholder ="Type Your Text Here------" />
            </div>
        );
    }
}
export default Display;
