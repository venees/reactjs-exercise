/*
1. Get the user input
2. Recurssively parse through the string and display each character with a random color
3. Get the order of character display from the user
4. Display them in which it was requested with the same random color which was generated in step 2
*/

// for a character
const Result = (props) => {
	return (
		<div className="random-color">{props.userInputChar}</div>
	);
}

// for the given string
const ResultSet = (props) => {
	return (
		<div>
            {props.result.map(result => <Result {...result} />)}
        </div>
	);
}


class Form extends React.Component {
    state = { userInput: '' };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi there ", this.state.userInput);
        this.props.onSubmit(this.state.userInput);
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                value = {this.state.userInput}
                onChange={(event) => this.setState({userInput: event.target.value})}
                //ref={(input) => this.userInput = input}
                placeholder="Enter the string" required />
                <button type="submit">Submit</button>
            </form>
        );
    }

}


class App extends React.Component {
    state = {
        result: []
    };

    displayInput = (inputDetail) => {
        // console.log(inputDetail);
        this.setState(prevState => ({
            result: prevState.result.concat(inputDetail)
        }));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.displayInput}/>
                <ResultSet result={this.state.result} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);