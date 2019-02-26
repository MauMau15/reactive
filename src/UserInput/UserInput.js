import React from 'react';
import './UserInput.css'

export default class UserInput extends React.Component{
    render(){
        return <input className='input' onChange={this.props.onChange}></input>
    }
}