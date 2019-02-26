import React from 'react';

import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: 'Mauricio'
        }
        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler(event){
        this.setState({
            userName:event.target.value
        },() => {
            console.log(this.state.userName)
        })
    }

    render(){
        return(
            <div>
                <UserInput onChange={this.eventHandler}></UserInput>
                <UserOutput user={this.state.userName}></UserOutput>
            </div>
        )
    }
}