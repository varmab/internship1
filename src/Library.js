import React, {Component} from 'react'
import BookList from './BookList';


class Library extends Component{
    constructor(){
        super();

        var books=[
            {
                id:1,
                title:"JS Fundamentals"
            },
            {
                id:2,
                title:"React Fundamentals"
            },
            {
                id:3,
                title:"Node Fundamentals"
            }
        ]

        this.state={
            books:books,
            wishList:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(book)

        this.setState({
            wishList:[
                ...this.state.wishList,
                book
            ]
        })
    }

    render(){
        return (
            <div>
                <h1>Library</h1>
                <p>My Wishlist:{this.state.wishList.length}</p>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
            </div>
        )
    }
}

export default Library