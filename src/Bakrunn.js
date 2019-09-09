import React, {Component} from "react"
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


class Bakgrunn extends React.Component {
    constructor() {
        super();
        this.state = {
            pictures: []
        }
    } //Constructor
    componentDidMount() {
        console.log("componentDidMount start")
        fetch("https://randomuser.me/api/?results=500")
            .then(results => results.json())
            .then (data => {
                console.log("Data er: ", data)
                let pictures2 = data.results.map((pic) => {
                    return (
                        <div key={pic.results}>
                            <img src={pic.picture.medium} alt="" />
                        </div>
                    )
                })
                //pictures2 = response.data
                this.setState({pictures: pictures2})
                this.setState({isLoading: false})
                console.log("pictures length er: " , this.state.pictures.length)
                console.log("state",this.state.pictures)
                    
            })

    }

    render() {
        return (
            <div>
                <h1>Bakgrunn har kjørt</h1>
                {this.state.pictures}
            </div>
        )
    }

}

export default Bakgrunn
