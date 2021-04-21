import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Route from 'react-router-dom'

import { fetchUsers } from '../actions'
import SignIn from './SignIn'
import SignUp from './SignUp'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchUsers())
  }, [])

  return (
    <Router>
       <Fragment>
        <Nav />
      <div className='background-overlay'></div>
        <div id="home">
            <Table />
            <div className="home-page">
              <Route path="/signIn" component={SignIn} />
              <Route path="/signUp" component={SignUp} />
            </div>   
        </div>
      </Fragment>
    </Router>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.users
  }
}

export default connect(mapStateToProps)(App)
