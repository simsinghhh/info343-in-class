/**
 * app.jsx
 * main entry point for our React application
 */
"use strict";

/**
 * app.jsx
 * main entry point for our React application
 */
"use strict";

//providing the actual input control and the form that allows the user to type in information
//that will render the page
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        //catch user interactions and update things 
        this.state = {name: ""}; //state is mutable data that can be updated while it is running

    }

   handleChange(event) {
        this.setState({name: event.target.value}); //happen any time you want to signal that the data has changed
        this.props.onChange(event.target.value);

   } 

   //onChange is a javascript6 syntax
   // => equivalent to declaring a function this key word will get reset 
   //to the global window object
    render() {
        return (
            <form>
                <input type="text" 
                    className="form-control"
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}/> 
            </form>
        );
    }
}

class Hello extends React.Component {
    //end up as a top letter property
    constructor(props) {
        super(props);
    }
    //all react components need to have a method called render()
    render() {
        return (
            //return something that is html mark-up that we can put right in the 
            //javascript framework
            <h2>Hello {this.props.title} {this.props.name}!</h2>
        );
    }
}

//basically the main 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={name: ""}
    }
    
    handleNameChange(name) {
        this.setState({name: name});
    }

    render()   { //check Stearn's heavily commented code for this part
        return (
            <div>
                <NameForm 
                    onChange={name => this.handleNameChange(name)}>
                </NameForm>
                <Hello name={this.state.name}></Hello>
            </div>
        );
    }
}

//handing over the ID that we created in the html
//makes the "this.props.name" my name! the name has to be the same. 
//props is the constructor value
ReactDOM.render(<App/>, document.getElementById("app"));


