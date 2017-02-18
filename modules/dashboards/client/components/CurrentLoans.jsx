import React from 'react';

class CurrentLoans extends React.Component {
  constructor(props) {
    super(props)
    State = {
      loans: props.user.openedloans,
    }
  }
}

export default CurrentLoans
