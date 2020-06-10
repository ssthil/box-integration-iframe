import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="header">
          <ul>
           {/*  <li>
              <Link to="/">Page 1</Link>
            </li> */}
           {/*  <li>
              <Link to="/page2">Page 2</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          {/* <Route path="/page2" exact>
            <Page2 />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  // const [userName, setUserName] = useState('')
  return (
    <div>
      <div className="wrapper">
        <h2>RFI and RFP - iframe </h2>
    
        <p>Narrow screen devices (e.g. mobiles) render pages in a virtual window or viewport, which is usually wider than
            the screen, and then shrink the rendered result down so it can all be seen at once. Users can then pan and zoom
            to see different areas of the page. For example, if a mobile screen has a width of 640px, pages might be
            rendered with a virtual viewport of 980px, and then it will be shrunk down to fit into the 640px space.</p>
    
    {/* <form>

      <div className="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Login</button>
      </div>
    </form> */}
    
            <div style={{textAlign: "center"}}>

            <iframe title="box" src="https://app.box.com/embed/folder/115287799972?sortColumn=date&view=list" width="70%" height="600" frameBorder="0" allowFullScreen />
            </div>
      </div>
    </div>
  );
}

/* function Page2() {
  return(
    <div>
      <div className="wrapper">
        <h2>Page 2 - iframe - different folder</h2>
    
        <p>Narrow screen devices (e.g. mobiles) render pages in a virtual window or viewport, which is usually wider than
            the screen, and then shrink the rendered result down so it can all be seen at once. Users can then pan and zoom
            to see different areas of the page. For example, if a mobile screen has a width of 640px, pages might be
            rendered with a virtual viewport of 980px, and then it will be shrunk down to fit into the 640px space.</p>
    
            <br/>
            <div style={{textAlign: "center"}}>

            <iframe title="box" src="https://app.box.com/embed/s/ezhi1pxzknox7z88rat2r2t0n2dqcznc?sortColumn=date&view=list" width="70%" height="600" frameBorder="0" allowFullScreen />
            </div>
      </div>
      </div>
  )
} */