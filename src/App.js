import React from "react";
import NationalityList from './components/NationalityList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', nameSubmit: false};
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({nameSubmit: true})
    // alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({nameSubmit:false})
    this.setState({username: event.target.value});
  }
  
  render (){
    let body = '';
    if (this.state.nameSubmit) {
      body = <>
      <h1>Below are the three most likely countries for the name {this.state.username}</h1>
      <NationalityList nameInput={this.state.username}/>
      </>;
    } else {
      body = <>Please add a name</>;
    }
    return (
      <>
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <input
          type='submit'
        />
        </form>
        {body}
      </>  
    )
  }

}

export default App;
