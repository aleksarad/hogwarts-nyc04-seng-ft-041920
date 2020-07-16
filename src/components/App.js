import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer";

class App extends Component {
  state = {
    pigs: hogs
  }

  handleFilter = () => {
    const filteredPigs = this.state.pigs.filter((pig) => {
      return pig.greased === true
    })

    this.setState({
      pigs: filteredPigs
    })
    console.log("handle filter clicked")
  }

  handleSort = (sortBy) => {
    if (sortBy === "none"){
      return
    }
    else{
      const sorted = this.state.pigs.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
      console.log(sorted)
    }
  }


  render() {
    return (
      <div className="App">
        <Nav />

        <button style={{marginBottom: "100px"}} onClick={this.handleFilter}> Greased Filter </button>
        <select onChange={(e) => this.handleSort(e.target.value)}>
          <option value="none">Sort By</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        
        <PigContainer pigs={this.state.pigs} />
      </div>
    );
  }
}

export default App;
