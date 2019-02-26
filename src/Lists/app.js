import React from 'react';

let Row = (props) => {
    return <p key={props.key}><span>{props.name}</span> <span>{props.user}</span></p>
}

let Button = (props) => {
    return <button onClick={props.click}>Delete</button>
}

let Input = (props) => {
    return <input onChange={props.change}></input>
}

export default class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showPersons:false,
            persons: [{
                id: 1,
                name: 'Mauricio',
                user: 'mrenero'
            },{
                id: 2,
                name: 'Alan',
                user: 'arenero'
            },{
                id: 3,
                name: 'Claudia',
                user: 'cquintana'
            }]
        }
        this.deleteUser = this.deleteUser.bind(this)
        this.toggleUsers = this.toggleUsers.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount = () => {
        this.setState({
            showPersons: true
        })
    }

    deleteUser = (id) => {
        let personsFilter = [...this.state.persons]
        this.setState({
            persons: personsFilter.filter(person => person.id !== id)
        })
    }

    toggleUsers= () => {
        let currentState = this.state.showPersons
        this.setState({
            showPersons: !currentState
        })
    }

    handleChange = (event,id) => {
        const indexToChange = this.state.persons.findIndex(p => p.id === id)
        let person = {
            ...this.state.persons[indexToChange]
        }
        person.name = event.target.value
        let persons = [...this.state.persons]
        persons[indexToChange] = person
        this.setState({
            persons: persons
        })
    }

    render = () => {
        let classPersonBox = {
            'width': '50%',
            'height': '120px',
            'border': '1px solid black',
            'margin': '10px',
            'textAlign':'center'
        }
        let elements = this.state.persons.map( (person) => {
            return(
                <div style={classPersonBox} key={person.id}>
                    <Row 
                        name={person.name} 
                        user={person.user}>
                    </Row> 
                    <Button 
                        click={this.deleteUser.bind(this,person.id)}>
                    </Button>
                    <Input
                        type="text"
                        change={(event) => this.handleChange(event,person.id)}>
                    </Input>
                </div>
            ) 
        })
        return(
            <div>
                <div>
                    <button 
                        onClick={this.toggleUsers}>Toggle</button>
                </div>
                {this.state.showPersons ? elements : null}
            </div>
        )
    }
}