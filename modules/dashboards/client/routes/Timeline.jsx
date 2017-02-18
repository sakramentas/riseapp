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
        <div className="row container-top" style={{height:'270px'}}>
          <h2 className="title text-center" style={ titleStyle }>Good Morning</h2>
          <div className="image text-center">
            <img src="https://avatars.io/twitter/sakramentas" style={{width:'91px', height:'auto'}}/>
          </div>
        </div>
        <div className="container-fluid container-bottom text-center">
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
  height: '100%'
}

const titleStyle = {
  color: '#FFF',
  marginTop: '38px',
  marginBottom: '31px',
  fontWeight: '200'
}


ReactDOM.render(<Timeline />, document.getElementById('react-test'))

export default Timeline
