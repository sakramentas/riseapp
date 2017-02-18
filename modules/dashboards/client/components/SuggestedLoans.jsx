import React from 'react';


// const singleTransaction = () => {
//   return() (
//     <div>
//       <span className="borrower.value">$350</span>
//       <span className="borrower.name">Megan</span>
//       <div className="borrower.trustrating">7</div>
//     </div>
//   )
// }

class SuggestedLoans extends React.Component {
  constructor(props) {
    super(props)
    State = {
      loans: props.user.loans,
    }
  }

  render() {
    <div>
      <span>Suggested Loans</span>
    </div>
  }
}


export default SuggestedLoans
