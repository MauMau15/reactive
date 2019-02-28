import React from 'react';
import './App.css'
import Radium from 'radium'

const Title = (props) => {
    return <h4>{props.title}</h4>
}

let ToggleButton = (props) => {
    return <div style={props.style} onClick={props.click}>Toogle Users</div>
}

const UserList = (props) => {
    let users = props.users.map((user,index) => {
        return(
            <li className="collection-item avatar" key={index}>
                <img src={user.photo} className="circle" alt={user.userName}></img>
                <span className="title">{user.name}</span>
                <p>{user.userName}</p>
            </li>
        ) 
    })
    return users
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showUsers: true,
            users: [{name:'Mau',userName:'mrenero',photo: 'https://i.scdn.co/image/bfe2542ab3a3cb9e79f5f9955281fadf4b1bc5b6'},
                    {name:'Clau',userName:'cchavez',photo: 'https://i.scdn.co/image/e1bd4c89d2b558253f41094e65130c9fd2dcbd2c'},
                    {name:'Love',userName:'4ever',photo:'https://i.scdn.co/image/479066d68926aad73dfb524fcdcd85688d6d08ab'}]
        }
    }

    toggleUsers = () => {
        let currentShowState = this.state.showUsers
        this.setState({
            showUsers: !currentShowState
        })
    }

    render(){

        let styleBox = {
            width: '100%',
            maxWidth: '100rem',
            border: '2px solid black',
            margin: '0 auto',
            textAlign: 'center',
            boxShadow: '5px 5px 5px grey',
            borderRadius: '30px',
            padding: '30px',
            transition: 'all .1s ease'
        }
        
        let styleButton = {
            width:'30%',
            height:'50px',
            maxWidth: '10rem',
            margin: '0 auto',
            border: '1px solid black',
            padding: '10px',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '5px 5px 5px grey',
            color:'white',
            transition: 'all .1s ease-in-out',
            ':hover': {
                background: 'gray',
                transform: 'translateY(1px)'
            }
        }

        ToggleButton = Radium(ToggleButton)

        let styleListClasses = ['collection','with-header','style-list'].join(' ')
        
        let currentShowState = this.state.showUsers

        if(currentShowState)
            styleButton.background = 'blue'
        else 
            styleButton.background = 'red'

        return(
            <div style={styleBox} className="linear">
                <Title 
                    title="Show Users App"></Title>
                <ToggleButton
                    style={styleButton}
                    click={this.toggleUsers}></ToggleButton>
                {
                    this.state.showUsers ? <ul className={styleListClasses}><UserList users={this.state.users}></UserList></ul> : null
                }
            </div>
        )
    }
}

export default Radium(App)