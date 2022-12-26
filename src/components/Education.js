import React, { Component } from "react";
import EducationView from "./EducationView";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institute: {
        name: "",
        course: "",
        startdate: "",
        endDate: "",
      },
      institutes: [
        {
          name: "WIT",
          course: "Bachelor of Business",
          startdate: "2010",
          endDate: "2014",
        },
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        institute: {
            ...this.state.institute,
            [name]: value,
          },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      institutes: this.state.institutes.concat(this.state.institute),
      institute: {
        name: "",
        course: "",
        startdate: "",
        endDate: "",
      },
    });
  };

  render() {
    return (
      <div>
        <h1>Education:</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputs-container">
            <div className="inputBox">
              <label htmlFor="name">School Name: </label>
              <input
                name="name"
                type="text"
                value={this.state.institute.name}
                required
                onChange={this.handleInputChange}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="course">course: </label>
              <input
                name="course"
                type="text"
                value={this.state.institute.course}
                required
                onChange={this.handleInputChange}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="startdate">Start: </label>
              <input
                name="startdate"
                type="date"
                value={this.state.institute.startdate}
                required
                onChange={this.handleInputChange}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="endDate">Finish: </label>
              <input
                name="endDate"
                type="date"
                value={this.state.institute.endDate}
                required
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="button-bar">
            <button type="submit">Save</button>
          </div>
        </form>
        <EducationView institutes={this.state.institutes} />
      </div>
    );
  }
}

export default Education;
