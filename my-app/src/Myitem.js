import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            clicks:0,
            totalremaining:100
        }
    }
    clickMe(){
    this.setState({
        clicks: this.state.clicks +1,
        totalremaining: this.state.totalremaining -1
    })
    }
    render (){
        return(
            <div>
            <h1 onClick={()=> this.clickMe()}>Hello from <small>{this.props.name}</small></h1>
            <span>{this.state.clicks} is the number of clicks. {this.state.totalremaining}</span>
            </div>
        )

    }
}
export default Item;