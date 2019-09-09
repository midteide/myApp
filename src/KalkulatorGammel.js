import React from "react"
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


class Kalkulator extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: 0,
            display: "0",
            operation: "",
            inputNumber: 0,
            readyForNewInput: true,
            inputOk: false
        }
        //this.ClickHandler = this.ClickHandler.bind(this);
    }

    async ClickHandler(tall1,tall2){
        console.log("InnClickHandler Tall1: ", tall1, "Answer: ",this.state.answer, " operation:" , this.state.operation, 
            "display: ", this.state.display, " inputNumber: ", this.state.inputNumber)

        if ((this.state.operation === "") && (!isNaN(tall1)) ) {
            let disp = `${this.state.display}${tall1}`
            if (this.state.readyForNewInput) {disp = `${tall1}`; await this.setState({readyForNewInput: false})}
            await this.setState({display: disp, answer: disp})
                await this.setState({operation: "!"})
            console.log("Operation ikke satt, answer er: ", this.state.answer)
        }
        else if ( !isNaN(tall1) ) {
            
                
                let disp = `${this.state.display}${tall1}`
                if (this.state.readyForNewInput) {disp = `${tall1}`; await this.setState({readyForNewInput: false})}
                await this.setState({display: disp, answer: disp})
                //await this.setState({inputNumber: Number(tall1)})
                console.log("Et nummer ble trykket på, answer er: ", this.state.answer, "RAEDYFORINPUT: ", this.state.readyForNewInput)
            
        }
        
        else if ((tall1 === "+") || (tall1 === "-") || (tall1 === "/") || (tall1 === "x")) {
            //await this.setState({display: tall1})
            
            if ((this.state.operation === "+") || (this.state.operation === "-") || (this.state.operation === "/") || (this.state.operation === "x")) {
                let t= Number(this.state.answer);
                //if ((this.state.operation === "") || (this.state.operation === "!")) t = Number(this.state.display)
                if (this.state.answer === 0) t= Number(this.state.display)
                else if (this.state.operation === "+") t = Number(this.state.answer) + Number(this.state.display)
                else if (this.state.operation === "-") t = Number(this.state.answer) - Number(this.state.display)
                else if (this.state.operation === "/") t = Number(this.state.answer) / Number(this.state.display)
                else if (this.state.operation === "x") t = Number(this.state.answer) * Number(this.state.display)
                t = t.toString()
                await this.setState({operation: "c", inputNumber: 0, answer: t, display: t})
                console.log("InputOK REaDY:", this.state.readyForNewInput)
                console.log("Answer set to: ", this.state.answer)
                    
            }
            await this.setState({inputOk: true, operation: tall1})
                
            if (!this.state.readyForNewInput) {
                console.log("OPERATOR READY")
            }
            if (tall1 === "=")await this.setState({inputOk: true})

            //await  this.setState({inputOk: true})
                
            console.log("Operator ble trykket1, answer=", this.state.answer, "Number: ", Number(this.state.display)    )
            //if (this.state.operation === "=") t = this.state.answer
            //console.log("+ ble trykket, t=", t)
        }
        
        else if (tall1 === "C") {
            //await this.setState({display: tall1})
            await this.setState({answer: 0, display: 0, operation: ""})
            console.log("Clear ble trykket")
        }
        else if (tall1 === "t") {
            //await this.setState({display: tall1})
            let test = Number(this.state.display) + 2;
            await this.setState({answer: 0, display: test})
            console.log("Clear ble trykket")
        }
        else if ((tall1 === ",") ){
            //await this.setState({display: tall1})
            try {
                if (this.state.display.indexOf(".") === -1) {
                let disp = `${this.state.display}${"."}`
                if (this.state.readyForNewInput) {disp = "0."; await this.setState({readyForNewInput: false})}
                await this.setState({display: disp})
                console.log(", ble trykket")
            }}
            catch (e) {
                console.log(e)
            }
        
        }
        else if (tall1 === "D"){
            if (!this.state.readyForNewInput){
                let disp = 0;
                if (this.state.display.length > 1) disp = this.state.display.slice(0,this.state.display.length-1)
                await this.setState({display: disp})
                console.log(this.state.display.length)
            }
        }
        else if (tall1 === "=") {
            //await this.setState({display: tall1})
            console.log("= ble trykket")
            //let resultat =0;
            await  this.setState({inputOk: true})
            
            console.log("=+, answer1: ",this.state.answer);
            
        }
        if (this.state.inputOk){
            let t= Number(this.state.answer);
            console.log("t:",t)
            //if ((this.state.operation === "") || (this.state.operation === "!")) t = Number(this.state.display)
            /*if (this.state.answer === 0) t= Number(this.state.display)
            else if (this.state.operation === "+") t = Number(this.state.answer) + Number(this.state.display)
            else if (this.state.operation === "-") {
                console.log("t:",t)
                console.log("state.answer:",this.state.answer)
                console.log("state.display:",this.state.display)
                t = Number(this.state.answer) - Number(this.state.display)
                console.log("t:",t)
                console.log("state.answer:",this.state.answer)
                console.log("state.display:",this.state.display)
            
            }
            else if (this.state.operation === "/") t = Number(this.state.answer) / Number(this.state.display)
            else if (this.state.operation === "x") t = Number(this.state.answer) * Number(this.state.display)
            //t = t.toString()
            console.log("t:",t)
            await this.setState({operation: tall1, inputNumber: 0, answer: t, readyForNewInput: true, display: t, inputOk: false})
            */
           await this.setState({readyForNewInput: true, inputOk: false})
           console.log("Answer set to: ", this.state.answer)
            console.log("InputOK REaDY:", this.state.readyForNewInput)
        }        
            //const resultat = this.state.answer + tall1;
        
        //await this.setState({answer: resultat});
        console.log("OutClickHandler Tall1: ", tall1, "Answer: ",this.state.answer, " operation:" , this.state.operation, 
            "display: ", this.state.display, " inputNumber: ", this.state.inputNumber, "READY: ", this.state.readyForNewInput)
   
        //return resultat
    }

    

    render() {
        //await this.setState({answer: tall1})
        
        return (
            <div>
                <h1>{this.state.display} </h1>
                <div>
                    <ButtonGroup size="lg"> 
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(1)} >1</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(2)} >2</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(3)} >3</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler("+")} >+</Button>
                </ButtonGroup></div>
                <div>
                <ButtonGroup size="lg">
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(4)} >4</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(5)} >5</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(6)} >6</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler("-")} >-</Button>
                </ButtonGroup></div>
                <div>
                <ButtonGroup size="lg">
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(7)} >7</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(8)} >8</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(9)} >9</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler("x")} >x</Button>
                </ButtonGroup></div>
                <div>
                <ButtonGroup size="lg">
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(0)} >0</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler("s")} >S</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(",")} >,</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler("/")} >/</Button>
                </ButtonGroup>
            </div>
            <div>
                <ButtonGroup size="lg">
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler("C")} >C</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler("D")} >D</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler(",")} >,</Button>
                    <Button variant="primary" name="getResult" onClick={() => this.ClickHandler("=")} >=</Button>
                </ButtonGroup></div>
            </div>
        )
    }
}

export default Kalkulator