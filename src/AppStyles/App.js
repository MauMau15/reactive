import React from 'react';
import './App.css'
import Radium from 'radium'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Title = (props) => {
    return <h4>{props.title}</h4>
}

let ToggleButton = (props) => {
    return <div style={props.style} onClick={props.click}>Toogle Users</div>
}

const UserItem = (props) => {
        return(
            <li className="collection-item avatar" onClick={props.click}>
                <img src={props.user.photo} className="circle" alt={props.user.userName}></img>
                <span className="title">{props.user.name}</span>
                <p>{props.user.userName}</p>
            </li>
        )
}

const UserDetail = (props) => {
    return(
                <UserCard
                    name={props.user.name}
                    userName={props.user.userName}
                    photo={props.user.photo}
                ></UserCard>
    )
}

const UserCard = (props) => {
    let card = {
        width:'60%',
        height: '15rem',
        boxShadow: '5px 5px 5px gray'
    }

    let imageCard = {
        width: '100%',
        height: '100%'
    }

    let imageCardContainer = {
        height: '70%'
    }
    return(
        <div className="card" style={card}>
            <div className="card-image" style={imageCardContainer}>
                <img src={props.photo} alt={props.userName} style={imageCard}></img>
                <span className="card-title">{props.name}</span>
            </div>
            <div className="card-content">
                <p>{props.userName}</p>
            </div>
        </div>
    )
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showUsers: true,
            users: [{name:'Mau',userName:'mrenero',photo: 'https://i.scdn.co/image/bfe2542ab3a3cb9e79f5f9955281fadf4b1bc5b6'},
                    {name:'Clau',userName:'cchavez',photo: 'https://i.scdn.co/image/e1bd4c89d2b558253f41094e65130c9fd2dcbd2c'},
                    {name:'Love',userName:'4ever',photo:'https://i.scdn.co/image/479066d68926aad73dfb524fcdcd85688d6d08ab'}],
            selectedUser: {}
        }
        this.toggleUsers = this.toggleUsers.bind(this)
        this.selectUser =  this.selectUser.bind(this)
    }

    toggleUsers = () => {
        let currentShowState = this.state.showUsers
        let clearSelectedUser = {}
        this.setState({
            showUsers: !currentShowState,
            selectedUser: clearSelectedUser
        })
    }

    selectUser = (index) => {
        let users = [...this.state.users]
        let selectedUser = users[index]
        this.setState({
            selectedUser: selectedUser
        },() => {
            console.log(this.state.selectedUser)
        })
    }

    render(){
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

        let selectedUser = {
            ...this.state.selectedUser
        }

        let users = this.state.users.map((user,index) => {
            return <UserItem 
                        user={user}
                        key={index}
                        click={this.selectUser.bind(this,index)}
                    ></UserItem>
        })

        if(currentShowState)
            styleButton.background = 'blue'
        else 
            styleButton.background = 'red'

        return(
            <ErrorBoundary>
                <div class="container">
                    <div class="row">
                        <div class="col m6">
                                <Title 
                                    title="Show Users App"></Title>
                                <ToggleButton
                                    style={styleButton}
                                    click={this.toggleUsers}></ToggleButton>
                                {
                                    this.state.showUsers ? 
                                        <ul className={styleListClasses}>
                                            {users}
                                        </ul> : 
                                            null
                                }
                        </div>
                        <div class="col m6">
                            {
                                !(Object.entries(selectedUser).length === 0 && selectedUser.constructor === Object) && this.state.showUsers
                                ? 
                                    <UserDetail 
                                        user={this.state.selectedUser}
                                    ></UserDetail>
                                    :null
                            }  
                        </div>
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}

export default Radium(App)