import React, { useState, useEffect } from 'react';
const  { getName } = require('country-list');


class NationalityList extends React.Component {

    // const apiStr = "https://api.nationalize.io/?name=" +  props.name;

    constructor(props) {
      super(props)
      this.state = {
        username: props.nameInput
      }
    }

    componentDidMount() {
      fetch("https://api.nationalize.io/?name=" + this.state.username)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.country
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else if (items.length == 0) {
        return <>No countries of origin found</>
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.country_id}>
                {getName(item.country_id)} {Math.round(item.probability * 100)}% 
              </li>
            ))}
          </ul>
        );
      }
    }
  
    
}

export default NationalityList;