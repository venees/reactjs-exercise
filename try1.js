/*
1. Get the user input
2. Recurssively parse through the string and display each character with a random color
3. Get the order of character display from the user
4. Display them in which it was requested with the same random color which was generated in step 2
*/

class UserForm extends React.Component {
	render() {
		return (
			<div>
				<input type="text"
						value={this.props.state.userInput}
						placeholder="Enter string" 
						required />			
				<button onClick={this.props.onClickFunction}>
					Submit
				</button>
			</div>
		);
	}
}

const Result = (props) => {
	return (
		<div className="random-color">{props.userInput}</div>
	);
}

class App extends React.Component {
	state = { userInput: ''};

	displayResult = () => {
		
		this.setState ({
			userInput: this.userInput
		})

		/*
		this.setState((prevState) = ({
				userInput: this.state.userInput
			}));
			*/
	};

	render() {
		return (
			<div>
				<UserForm onClickFunction={this.displayResult} />
				<Result userInput={this.state.userInput} />
			</div>
		);
	}
}

ReactDOM.render(<App />, mountNode);
