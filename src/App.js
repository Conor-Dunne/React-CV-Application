import React, { Component } from "react";
import "./App.css";
import Personal from "./components/Personal";
import Education from "./components/Education";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // personalIsSaved: true,
      inPreview: false,
    };
  }

  handlePreview = () => {
    if (!this.state.inPreview) {
      this.setState({
        inPreview: true,
      });
    } else {
      this.setState({
        inPreview: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.handlePreview}>
          {this.state.inPreview ? "Edit" : "Preview"}
        </button>
        <Personal
          inPreview={this.state.inPreview}
        />
        <hr />
        <Education inPreview={this.state.inPreview} />
        <hr />
      </div>
    );
  }
}

export default App;
