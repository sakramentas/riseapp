import React from 'react'
import ReactDOM from 'react-dom'
import CurrentLoans from '../components/CurrentLoans.jsx'
import SuggestedLoans from '../components/SuggestedLoans.jsx'
import { Button } from 'react-bootstrap';


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
          <h2 className="title text-center" style={ titleStyle }>Good Morning!</h2>
          <div className="avatar-image text-center">
            <img src="https://avatars.io/twitter/sakramentas" style={{width:'91px', height:'auto'}}/>
          </div>
        </div>
        <div className="container-bottom text-center">
          <CurrentLoans style={{marginBottom: '10px'}} />
          <SuggestedLoans />
        </div>
        <Button bsStyle="success">Success</Button>
      </div>
    )
  }
}


let bgImg = '/modules/core/client/img/backgrounds/stars.jpg'

const mainContainer = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  height: '100%',
  fontFamily: 'Avenir-Book'
}

const titleStyle = {
  color: '#FFF',
  marginTop: '38px',
  marginBottom: '31px',
  fontWeight: '200'
}


export default Timeline
