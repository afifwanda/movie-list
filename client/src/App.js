import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import store from './Store/index';

import Home from './Pages/Home-page';
import Detail from './Pages/Detail-page';
import Search from './Pages/Search-page'

const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/movie/:id',
    exact: true,
    children: <Detail />
  },
  {
    path: '/search',
    exact: true,
    children: <Search />
  }
]

function App() {
  return (
    <Provider store={ store }>
    <Router>
      <div>
        <Switch>
          {
            routes.map(element=>{
              return(
                <Route 
                key={element.children}
                {...element}/>
              )
            })
          }
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;