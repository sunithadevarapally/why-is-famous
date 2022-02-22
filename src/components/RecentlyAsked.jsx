import React from "react";
import { ListGroup } from "react-bootstrap";


class RecentlyAsked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentlyAsked: []
        };
    }

    componentDidMount() {
        fetch(this.props.serviceUrl + '/list_questions', {})
            .then(response => response.json())
            .then(data => this.setState({recentlyAsked: data.message}));
    }

    render(){
        var recentQuestions = [];
        for (var q in this.state.recentlyAsked) {
            recentQuestions.push(<ListGroup.Item key={this.state.recentlyAsked[q]}>{this.state.recentlyAsked[q]}</ListGroup.Item>);
        }
        return(
            <>
            <h1>Recently Asked</h1>
            <ListGroup>
            {recentQuestions}
            </ListGroup>
            </>     
        );
    }

}
export default RecentlyAsked;