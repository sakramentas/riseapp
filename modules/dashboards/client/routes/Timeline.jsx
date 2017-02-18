import React from 'react'
import ReactDOM from 'react-dom'
import CurrentLoans from '../components/CurrentLoans.jsx'
import SuggestedLoans from '../components/SuggestedLoans.jsx'


class Timeline extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // State = {
  //   //   loans: props.user.loans,
  //   // }
  // }

  // componentWillMount() {
  //   console.log('test');
  // }

  render() {
    return (
      <div className="main-container" style={mainContainer}>
        <div className="row container-top">
          <h2 className="title">Good Morning</h2>
        </div>
        <div className="image"></div>
        <div className="row container-bottom">
          <CurrentLoans />
          <SuggestedLoans />
        </div>
      </div>
    )
  }
}


let bgImg = '/modules/core/client/img/backgrounds/stars.jpg'

const mainContainer = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
}


ReactDOM.render(<Timeline />, document.getElementById('react-test'))

export default Timeline
