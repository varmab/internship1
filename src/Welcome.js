import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return <h1 onClick={this.updateClicks}>Welcome to {this.props.title} {this.props.year} - {this.state.clicks}</h1>
    }
}

Welcome.propTypes={
    title:PropTypes.string,
    year:PropTypes.number.isRequired
}

Welcome.defaultProps={
    year:2019
}

export default Welcome;