import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super();

        this.state={
            count:0,
            disabled:true
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            if(this.state.count>0){
                this.setState({
                    disabled:false
                })
            }
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            if(this.state.count>0){
                this.setState({
                    disabled:false
                })
            }
            else
            {
                this.setState({
                    disabled:true
                })
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement} disabled={this.state.disabled}>Decrement</button>
            </div>
        )
    }
}

export default Counter;