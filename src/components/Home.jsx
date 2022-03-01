import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questionText: "",
            displayData : ""
        };
    }
    
    onSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({ question: this.state.questionText })
        };
        fetch(this.props.serviceUrl + '/add_question', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({
                questionText: "",
                displayData: JSON.stringify(data)
            }));
      };


    render(){        return(
            <div>
                <div id = "question-content">
                    <div id = "question">
                    Why is<Form.Control type="" value={this.state.questionText} className= "w-50" size="sm" id="inputQuestion5" aria-describedby="questionHelpBlock" onChange={e => this.setState({ questionText: e.target.value })}
    />famous?
                    </div>
                    <Button onClick={this.onSubmit} variant="secondary">Ask</Button>{' '}
                </div>
                <div>{this.state.displayData}</div>
            </div>
        );
    }
}
export default Home;