import React, { Component } from "react";

class EducationView extends Component {
  render() {
    return (
      <div className="layout">
        <h1
          style={{ display: !this.props.inPreview ? "none" : "block" }}
        >
          Education:
        </h1>
        <hr />
        {this.props.institutes.map((institute) => {
          return (
            <div className="item"
            style={{ backgroundColor: !this.props.inPreview ? "aliceblue" : "none" }}
            >
              <div className="dates">
                <p>{`${institute.startdate}-`}</p>
                <p>{`${institute.endDate}`}</p>
              </div>
              <div id="title">
                <h3>{institute.course}</h3>
                <p>{institute.name}</p>
              </div>
              <div className="button-bar">
                <button
                  className="delete-btn"
                  onClick={() => this.props.onDelete(institute.id)}
                  style={{ display: this.props.inPreview ? "none" : "block" }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationView;
