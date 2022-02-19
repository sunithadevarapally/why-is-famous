import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Home extends React.Component{
    render(){
        return(
            <div id = "question-content">
                <div id = "question">
                Why is<Form.Control type="" className= "w-50" size="sm" id="inputPassword5" aria-describedby="passwordHelpBlock"/>famous?
                </div>
                <Button variant="secondary">Ask</Button>{' '}
            </div>
        );
    }

}
export default Home;