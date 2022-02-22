import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            val: ""
        };
    }
    
    onSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({ question: this.state.val })
        };
        fetch(props.serviceUrl + '/add_question', requestOptions)
            .then(response => response.json())
            .then(data => alert(JSON.stringify(data)));
      };


    render(){
        return(
            <div id = "question-content">
                <div id = "question">
                Why is<Form.Control type="" className= "w-50" size="sm" id="inputQuestion5" aria-describedby="questionHelpBlock" onChange={e => this.setState({ val: e.target.value })}
/>famous?
                </div>
                <Button onClick={this.onSubmit} variant="secondary">Ask</Button>{' '}
            </div>
        );
    }
}
export default Home;