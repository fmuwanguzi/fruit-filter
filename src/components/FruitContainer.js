import React, { Component } from 'react';
//components
import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    constructor(props){
        super()
        this.state = {
            //initialize the fruit list to the fruit list passed into props
            fruitsToDisplay: this.props.fruits,
            //initializt the filter value to an empty string
            filterValue: ''

        };
    }

    handleFilterChange = (e) => {
        e.preventDefault();
        // e.target.value is the user input
        let filterValue = e.target.value;
        //Remove tge fruits that don't contain the filer value
        const filteredFruitList = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase());

            // if (fruit.toLowerCase() ==== filterValue.toLowerCase()) {
            //     return true;
            // }
        })

        this.setState({ fruitsToDisplay: filteredFruitList, filteredValue });

    }


    render(){
        //Inside of Input Componenet, to access props, I will say props.value
        //Inside of List Componenet, to access props, I will say props.fruits
        return(
            <div>
                <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}

export default FruitContainer;