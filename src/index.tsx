import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import {Card} from "./card";
import {FormComp} from "./form"



class Button extends React.Component <any>{
  render(){
    return <button style={{backgroundColor:"aqua"}}>{this.props.children}</button>
  }
}

const OtroButton = (prop)=>{
  
  return (
    <button style={{backgroundColor: "green"}}>{prop.unaProp}</button>
  )
}

class MyButton extends React.Component <any>{
  constructor(props){
    super(props);
    
  }
  render(){
    
    return <button style={{backgroundColor:"red"}}>{this.props.num}</button>
  }
}

   


class ShowQuote extends React.Component <any, any>{
  
  render(){
    const title = this.props.data > 100? "es menor a cien" : "es mayor a cien";
    return (
          <div style={{border:"solid 2px"}}>
            <h2>cotizacion</h2>
            <div>{title}</div>
          </div>
    )
  }
}


class HelloMessage extends React.Component <any, any> {
 constructor(prop){
   super(prop)
   this.state = {
     resultados:[]
   }
 }
  render() {
    const handleSearch = async (search)=>{
      const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q="+search);
      const data = await res.json();
      console.log("los results", data.results);
       this.setState({
        resultados: data.results
        
      })
      console.log("data", this.state);
    } 

    return (<div>
              <h1>Buscador de Mercado Libre en React!</h1>
                <FormComp onSearch = {handleSearch} />
            </div>)
  }
}

const root = document.querySelector(".root");
const root2 = createRoot(root!);
root2.render(<HelloMessage name="Taylor" />);