import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { OldUser}  from './OldUser';
import { Home }from './Homepage';
import { About }from './About';
import { Test }from './Tests';
import { Study }from './Study';
import { Info }from './Info';
import { Navbar } from './Navbar';
import { Course } from './Course';
import { Testpage } from './Testpage';
import { Assignment } from './Assignment';

export const Dash = (props) => {
  let user = props.value
    return (
      <div>
    <Router>
      <Router>
        <Navbar />
       <Switch>
         <Route exact path="/home"><Home value={user}/></Route>
         <Route path="/about"><About value={user}/></Route>
         <Route path="/tests"><Test /></Route>
         <Route path="/assignment"><Assignment /></Route>
         <Route path="/courses"><Study value={user}/></Route>
         <Route path="/notification"><Info /></Route>
          <Route path='/course'><Course value={user}/></Route>
          <Route path='/test'><Testpage value={user}/></Route>
         </Switch>
         </Router>
    </Router>
    </div>
    )
}