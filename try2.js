/*
1. Get the user input
2. Recurssively parse through the string and display each character with a random color
3. Get the order of character display from the user
4. Display them in which it was requested with the same random color which was generated in step 2
*/

let myUsrInput = [];

class Form extends React.Component {
	state = {userInput: ''}

	onGo = (event) => {
		event.preventDefault();

        myUsrInput = this.state.userInput;

        for (var i=0; i < myUsrInput.length; i++)
        {
            console.log(myUsrInput.charAt(i));
        }
        this.setState({ userInput: ''});
	};
	
	render () {
		return (
			<form onSubmit={this.onGo}>
				<input 
					type="text" 
					value={this.state.userInput}
					onChange={(event) => this.setState({userInput: event.target.value})}
					placeholder="Enter string" 
					required />
				<button type="go">Go !</button>
			</form>
		);
	}
}

/*const Result  = (props) =>{
	return(
		<div className="letter">
			<p1>
				.....
			</p1>
		</div>
	);
}*/

class Result extends React.Component {
    render() {
        return (
            <div>{myUsrInput}</div>
        );
    }
}

class App extends React.Component {
	render (){
		return (
			<div>
				<Form />
				<Result />
			</div>
		)
	}
}


ReactDOM.render(<App />, mountNode);