import "../../styles/index.css";
import React, {Component} from "react";
import Light from "../Light";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={color:['red','yellow','green'], activelight: "red"}
    }
    render () {
        const handleChange=(color) => {
          this.setState({activelight : color})  
        }
        return (
            <div className="App">
                <div className="container">
                    {this.state.color.map((color) => {
                        return <Light color={color} activelight={this.state.activelight} handleChange={handleChange} />;
                    })}
                </div>
            </div>
        );
    };
}

export default App;