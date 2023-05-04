import React from "react";

const Hints = (props) => {
  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0" style={{ textAlign: "center" }}>
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Hint #1
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            {props.hint1}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0" style={{ textAlign: "center" }}>
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hint #2
            </button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            {props.hint2}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0" style={{ textAlign: "center" }}>
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Hint #3
            </button>
          </h5>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            {props.hint3}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingFour">
          <h5 className="mb-0" style={{ textAlign: "center" }}>
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Hint #4
            </button>
          </h5>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingFour"
          data-parent="#accordion"
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            {props.hint4}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingFive">
          <h5 className="mb-0" style={{ textAlign: "center" }}>
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Hint #5
            </button>
          </h5>
        </div>
        <div
          id="collapseFive"
          className="collapse"
          aria-labelledby="headingFive"
          data-parent="#accordion"
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            {props.hint5}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hints;
