import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showPersons: true
        }
        this.tooglePersons = this.tooglePersons.bind(this)
    }

    tooglePersons(){
        let currentState = this.state.showPersons
        this.setState({
            showPersons: !currentState
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.tooglePersons}>Mostrar / Ocultar</button>
                {
                    this.state.showPersons === true ?
                    <div>
                        <p>Persona 1</p>
                        <p>Persona 2</p>
                    </div> : null
                }
            </div>
        )
    }
}