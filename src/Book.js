import React, {Component} from 'react'

class Book extends Component{
    constructor(props){
        super(props);

        this.state={
            book:props.book
        }
    }

    addToWishlist=()=>{
        this.props.addToWishlist(this.state.book)
    }

    render(){
        return (
            <div>
                <h1>Book</h1>
                <p>{this.state.book.title}</p>
                <button onClick={this.addToWishlist}>Add To Wishlist</button>
            </div>
        )
    }
}

export default Book;