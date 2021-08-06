import React, { Component } from 'react'

export class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:[],
             isLoaded:false
        }
    }
    componentDidMount(){
        fetch('https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json
            })
        });
    }
    render() {
        var {isLoaded,items}=this.state;
        if(!isLoaded){
            return<div>Loading...</div>;
        }
        else{
            return (
                <div>
                    <ul>
                        {items.map(item=>(<li key={item.id}>
                                Name:{item.item_name} ------ Price:{item.price}
                            </li>))};
                        </ul>       
                </div>
            );
        }
    }
}

export default Main
