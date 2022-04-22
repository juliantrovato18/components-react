import React from "react";

export class FormComp extends React.Component <any, any>{
    
    
   
    render(){
    const handleSearch = (e)=>{
         e.preventDefault();
         if(this.props.onSearch){
            this.props.onSearch(e.target.search.value)
         }
         
     }

      return (
            <form onSubmit={handleSearch}>
             <input type="text" name="search" />
             <button className="button">Buscar</button>
            </form>
        
        
    )
    }
  }