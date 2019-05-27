import React from 'react'

class Users extends React.Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:false,
            error:false
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholderxxxx.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=>{
            this.setState({
                users:users,
                loading:true
            })
        })
        .catch((errr)=>{
            this.setState({
                loading:true,
                error:true
            })
        })
    }

    render(){
        if(this.state.loading==false){
            return (<div>
                <h1>Users</h1>
                <p>Loading..</p>
            </div>)
        }

        if(this.state.error==true){
            return (<div>
                <h1>Users</h1>
                <p>Sorry. Please try again later..</p>
            </div>)
        }
        return (
            <div>
                <h1>Users</h1>
                <ul>
                {
                    this.state.users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Users;