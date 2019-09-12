import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from './components/Counter'
import Message from './components/Message'
import RepoSearch from './components/RepoSearch'
import counter from './stores/counter/'
import message from './stores/message/'
import search from './stores/search/'

class App extends Component {
  render(){
    return(
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/message/">Message</Link>
            </li>
            <li>
              <Link to="/search/">Repository Search</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact render={(props) => <Counter store={counter} />}  />
        <Route path="/message/" render={(props) => <Message store={message} />} />
        <Route path="/search/" render={(props) => <RepoSearch store={search} />} />
      </div>
    </Router>
    );
  }
}

export default App;