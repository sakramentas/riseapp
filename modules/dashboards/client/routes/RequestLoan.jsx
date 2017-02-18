import React from 'react';

class RequestLoan extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div id="top" className="container-fluid">
          <span>Request a loan</span>
        </div>
        <div id="bottom" className="container-fluid">
          <div>
            <span>Request a loan</span>
          </div>
          <hr/>
          <div>
            <span>ASAP</span>
            <span>From</span>
            <span>To</span>
          </div>
          <hr/>
          <div>
            <span>Request a loan</span>
          </div>
          <hr/>
          <div>
            <span>Value</span>
          </div>
          <hr/>
          <div>
            <span>Payment</span>
          </div>
          <div>
            V
          </div>
        </div>
      </div>
    )
  }
}

export default RequestLoan
