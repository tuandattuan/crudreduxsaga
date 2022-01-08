import React, {  } from 'react';

//import { Route,Switch } from 'react-router-dom';
import UserManager from './components/UserManager.jsx';

function App() {
    return (
      <div className="App">
        
            {/* <Switch>
                <Route exact path="/" component={UserManager} />
                
            </Switch> */}
            <UserManager/>
         
      </div>
    );
}

export default App;
