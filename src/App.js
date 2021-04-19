import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Issues from './Components/Issues';
import apiResponse from './apiResponse';


class App extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: '',
      filteredIssues: apiResponse
    }
  }

  handleInput = (e) => {
    let si = e.target.value

    if(si.length > 0) {
      let filteredIssues = apiResponse.filter((issue) => {
        if(issue.title.includes(si)) {
          return true
        }
        return false
      })

      this.setState({
          searchInput: e.target.value,
          filteredIssues: filteredIssues
      })
    } else {
      this.setState({
        searchInput: e.target.value,
        filteredIssues: apiResponse
      })
    }
  }

  render() {
    const { searchInput, filteredIssues } = this.state
    return (
      <div>
        <SearchBar searchInput={searchInput} handleInput={this.handleInput}/>
        <Issues issuesToShow={filteredIssues}/>
      </div>
    )
  }
}

export default App
