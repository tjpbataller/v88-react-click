import React, {Component} from "react";
import Button from "react-bootstrap/Button";

class Click extends Component{
    constructor(){
        super();
        this.state = {counter: 0}
    }
    UpdateCounter = ()=>{
        this.setState({counter: this.state.counter+1});
    }
    render(){
        return (
            <React.StrictMode>
                <Button onClick={()=>this.UpdateCounter()}>Click Me</Button>
                <h1>{this.state.counter}</h1>
            </React.StrictMode>
        )
    }
}

export default Click;