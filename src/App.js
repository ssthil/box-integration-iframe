import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="header">
          <ul>
            <li>
              <Link to="/">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/page2" exact>
            <Page2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div className="wrapper">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi repudiandae, tempora fugiat quas sequi
            dignissimos impedit necessitatibus quaerat veritatis alias accusamus similique autem deserunt eligendi harum est
            quos quae!</p>
        <h2>Page 1 - iframe - single note</h2>
    
        <p>Narrow screen devices (e.g. mobiles) render pages in a virtual window or viewport, which is usually wider than
            the screen, and then shrink the rendered result down so it can all be seen at once. Users can then pan and zoom
            to see different areas of the page. For example, if a mobile screen has a width of 640px, pages might be
            rendered with a virtual viewport of 980px, and then it will be shrunk down to fit into the 640px space.</p>
    
            <br/>
            <div style={{textAlign: "center"}}>

            <iframe title="box" src="https://app.box.com/folder/0" width="98%" height="600" frameBorder="0" allowFullScreen />
            </div>
      </div>
    </div>
  );
}

function Page2() {
  return(
    <div>
      <div className="wrapper">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi repudiandae, tempora fugiat quas sequi
            dignissimos impedit necessitatibus quaerat veritatis alias accusamus similique autem deserunt eligendi harum est
            quos quae!</p>
        <h2>Page 2 - iframe - different folder</h2>
    
        <p>Narrow screen devices (e.g. mobiles) render pages in a virtual window or viewport, which is usually wider than
            the screen, and then shrink the rendered result down so it can all be seen at once. Users can then pan and zoom
            to see different areas of the page. For example, if a mobile screen has a width of 640px, pages might be
            rendered with a virtual viewport of 980px, and then it will be shrunk down to fit into the 640px space.</p>
    
            <br/>
            <div style={{textAlign: "center"}}>

            <iframe title="box" src="https://app.box.com/folder/0" width="98%" height="600" frameBorder="0" allowFullScreen />
            </div>
      </div>
      </div>
  )
}