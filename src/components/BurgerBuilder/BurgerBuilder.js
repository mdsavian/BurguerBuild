import React, { Component } from 'react'
import Burger from '../Burger/Burger'
export default class Burguerbuilder extends Component {
   
    state={
ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0,
}
    }
    render() {
        return (
            <>
              <Burger ingredients={this.state.ingredients}></Burger>
            </>
        )
    }
}
