import React from 'react';
import './App.css';
//import { render } from '@testing-library/react';

class Semaforo extends React.Component {

    constructor(){
        super();
        this.state={
            clickedLight: null
        };
    }

    render() {
        let red_selected = "";
            if (this.state.clickedLight === 'red') red_selected = 'selected';
        let yellow_selected = "";
        if (this.state.clickedLight === 'yellow') yellow_selected = 'selected';
        let green_selected = "";
        if (this.state.clickedLight === 'green') green_selected = 'selected';
    
        return (
            <div>
                <div className="container">
                    <div className="row">                        
                        <div className="col-md-4">
                            <div className="container bg-dark p-1">
                                <div className="row pt-2">
                                    <div className={"col-md-12 bg-danger " + red_selected} onClick={()=>this.setState({clickedLight:'red'})}></div>
                                    </div>
                                <div className="row pt-2">
                                        <div className={"col-md-12 bg-warning " + yellow_selected} onClick={()=>this.setState({clickedLight:'yellow'})}></div>
                                        </div>
                                <div className="row pt-2">
                                       <div className={"col-md-12 bg-success " + green_selected} onClick={()=>this.setState({clickedLight:'green'})}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Semaforo;