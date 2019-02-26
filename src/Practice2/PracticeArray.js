import React from 'react';

let InputLen = (props) => {
    return <input onChange={props.change} value={props.value}></input>
}

let ValidationComponent = (props) => {
    if(props.textLen < 5){
        return <p>The text is too short</p>
    }else{
        return <p>The text is valid</p>
    }
}

let CharComponent = (props) => {
    return (
        <div className="col s12 m2">
            <div className="card" onClick={props.click}>
                <span className="card-title">{props.letter}</span>
            </div>
        </div>
    )
}

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            textLen: 0,
            name: ''
        })
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            textLen: event.target.value.length,
            name: event.target.value
        },() => {
            console.log(this.state.name)
        })
    }

    clickChart(index){
        let newName = this.state.name.split('')
        newName.splice(index,1)
        this.setState({
            name: newName.join('')
        })
    }

    render(){
        let letters = this.state.name.split('')
        let items = letters.map((letter,index) => {
            return <CharComponent 
                        key={index} 
                        letter={letter} 
                        click={this.clickChart.bind(this,index)}>
                    </CharComponent>
        })

        return(
            <div className="container">
                <div className="row">
                    <InputLen
                        change = {(event) => this.handleChange(event)}
                        value={this.state.name}
                    />
                    <ValidationComponent
                        textLen = {this.state.name.length}
                    />
                </div>
                
                <div className="row">
                    {
                        items.length > 0 ? items : null
                    }
                </div>
            </div>
        )
    }
}