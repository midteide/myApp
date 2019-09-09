import React from "react"
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Bakgrunn from "./Bakrunn.js"
import Kalkulator from "./Kalkulator.js";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            pictures: []
            
        }
        this.klikk = this.klikk.bind(this)
    }
    klikk() {
        //let teller = this.state.count + 1
        //this.alex(teller);
        this.setState(prevState => {
                return {
                    count: prevState.count +2
                
                }
            })
        /*this.setState(prevState=> {
            return {
                count: prevState.count + 1
            }
        })
        */
    }
    alex(teller) {
        this.setState({ count: teller });
    }
/*
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=500")
        .then(results => {
            return results.json();
            }).then(data => {
                let pictures = data.results.map((pic) => {
                    return{
                        <div key={pic.results}>
                            <img src={pic.picture.medium} />
                        </div>
                    }
                })
                this.setState({pictures: pictures});
                console.log("state", this.state.pictures);
            })
        }
       */ 
    render() {
        return (
            /*<div>
                <h1>{this.state.count}</h1>
                <button onClick={this.klikk}>Change!</button>
                <ButtonToolbar>
                    <Button variant="primary" onClick={() => console.log(this.state.pictures.length)}>Bootstrap knapp</Button>
                </ButtonToolbar>
                <Bakgrunn />

            </div>
            */
           <div>
               <Kalkulator tall1={3} />
           </div>
        )
    }
}

export default App


