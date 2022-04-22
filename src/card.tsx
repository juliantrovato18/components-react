import React from "react";



export class Card extends React.Component <any, any>{
    
    render(){
      return (
        
            <div className="card-container">
              <img className="card-image" src= {this.props.image} />
              <div className="card-container-props">
                <h3>{this.props.title}</h3>
                <h5>{this.props.price}</h5>
              </div>
            </div>
        
        
        
    )
    }
  }

  