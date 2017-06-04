import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <output className="form__result">
          Składka ubezpieczenia:&nbsp; {Math.ceil(this.props.result)} zł
        </output>
    )
  }
}

export default Result;
