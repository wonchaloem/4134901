import React from "react";


//stateful

class wheel extends React.Component{

    render(){
        return <p> I have 4 wheels.</p>; 
    }
}

class Car extends React.Component{
    constructor(props){
      super(props);
      this.state={brand:"Toyota"};
    }
    changebrand=(msg)=>{
        this.setState({brand:"Mazda"});
        alert(msg);
    };
    render(){
      return (
      <>
      <wheel />    
        <p>
        My name is <span>{this.state.brand}</span>
        <br/>
        Eye color is {this.props.eye}
      </p>
      <button onClick={()=>this.changebrand("Hi!!!")}>Click Me</button>
      </>
      );
    }
  }

  export default Car;