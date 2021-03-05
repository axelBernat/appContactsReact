/* Parent of All Components */

import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/interface/Header'
import Liste from './composants/contact/Liste'
import {Provider} from './context'
import AddContact from './composants/contact/AddContact'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Apropos from './composants/pages/Apropos'
import Erreur from './composants/pages/Erreur'
class App extends Component {
  
  
  render() {
    return (
      <Provider>
        <Router >
            <div className="App">
            <Header />
            <div className="container">

            <Switch>
            <Route exact path="/ajoute" component={AddContact} />
            <Route exact path="/liste" component={Liste} />
            <Route exact path="/" component={Liste} />
            <Route exact path="/apropos" component={Apropos} />
            <Route component={Erreur} />
            </Switch>
            
            </div>
            </div>
        </Router>
      </Provider>
  )
}
  }
  

export default App;
