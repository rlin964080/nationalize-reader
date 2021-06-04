import React from "react";
import NationalityList from './components/NationalityList'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class CountryOrigin extends React.Component {
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
      if (this.state.username) {
        body = <>
        <h2>Below are the three most likely countries of origin for the name: {this.state.username}</h2>
        <NationalityList nameInput={this.state.username}/>
        </>;
      } else {
        body = <>You did not enter a name please enter one</>
      }
    } else {
      body = <>Please add a name and click submit</>;
    }
    return (
      <>
        <form onSubmit={this.mySubmitHandler}>
        <h1>Top Countries of Most Likely Origin for Name</h1>
        <h2>Hello {this.state.username}</h2>
        <p>Enter your name, and submit:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <Button as="input" type="submit" value="Submit" />
        </form>
        {body}
      </>  
    )
  }

}

export default CountryOrigin;
