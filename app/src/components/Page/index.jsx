// Page
import React from 'react';
import styles from './style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuItems from 'elements/MenuItems'
import { homeMenuItems } from 'data/menu-items'
import HtmlTOC from './HtmlTOC'
import ReactTOC from './ReactTOC'
import React01 from './ReactTOC/React01'
import React02 from './ReactTOC/React02'
import React03 from './ReactTOC/React03'

const Page = () => (

  <Router>
    <div>
      <header>
        <h1>TOC</h1>
      </header>
      <Switch>
        <Route exact path='/react-toc' component={ReactTOC} />
        <Route path='/react-toc/react-01' component={React01} />
        <Route path='/react-toc/react-02' component={React02} />
        <Route path='/react-toc/react-03' component={React03} />
        <Route exact path='/' render={() => (
          <div>
            <MenuItems
              src={homeMenuItems}
            />
          </div>
        )} />
      </Switch>

    </div>
  </Router>
)

export default Page
