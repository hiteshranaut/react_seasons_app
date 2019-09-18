import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';




class App extends React.Component {
	state = { lat: null , errorMessage: '' };



// all data loading related code will go to componentDidMount method
	componentDidMount() {

		window.navigator.geolocation.getCurrentPosition(
				(position) => { 
				 	this.setState({lat: position.coords.latitude})
				} ,
				(err) => {
					this.setState({errorMessage: err.message})
				} 
	    	);

	}

// will run when component is updated
 	componentDidUpdate() {
		console.log("it's updated")
	}
    
    // will run when copmonent is unmount
	compnentWillUnmount() {

	}


	renderContent(){
			if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: Error: {this.state.errorMessage}</div>;
		}
 
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />
		}

        
        return <Spinner  />;

	}

	render() {

	   return (
	   	<div className="border red">
	   		{this.renderContent()}
	   	</div>
	   	);

	}
}

ReactDOM.render(<App /> , document.querySelector('#root'));