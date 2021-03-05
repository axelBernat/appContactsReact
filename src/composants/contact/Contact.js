/* Child of Contact.js */

import React, { Component } from 'react'
import { Consumer } from "../../context";

export default class Contact extends Component {
    
    state = {
        show:false
    }

    montrerContact = () => {
        this.setState({
            show : !this.state.show
        })

    }
    supprimeContact = (id,dispatch) => {
        dispatch({type:'DELETE_CONTACT',payload: id})
        //this.props.supprimeClick()
    } 
    render() {
        return(
            <Consumer>
            {value => {
                return (
                    <div className="card card-body mb-3 text-center">
                    
                <h4>{this.props.nom}&nbsp; <i className = "fas fa-sort-down"
                style={{cursor:'pointer'}} 
                onClick={this.montrerContact}></i>
                 <i onClick={() => this.supprimeContact(this.props.id,value.dispatch)} className="fas fa-times" 
                 style={{color:"red",cursor:"pointer",float:"right"}}></i>
                </h4> 

                {this.state.show ? (
                    <ul className="card card-body mb-3">
                    <li className="list-group-item">
                    Email: {this.props.email}
                    </li>
                    <li className="list-group-item">
                    Téléphone: {this.props.tel}
                    </li>
                </ul> 
                ) : null }
                
                
            </div>
                )
            }}
            </Consumer>
        )
    }
}
