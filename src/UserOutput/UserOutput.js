import React from 'react';
import './UserOutput.css';

export default class UserOutput extends React.Component{
    render(){
        return(
            <div className='UserOutput'>
                <p>Hello {this.props.user}</p>
                <p>This is React</p>
            </div>
        )
    }
}