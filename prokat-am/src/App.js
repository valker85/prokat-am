import React from 'react';
import './App.css';

import {Route, withRouter} from 'react-router-dom'


import routes from './routes';


class App extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.location.pathname !== this.props.location.pathname){
      window.scrollTo(0, 0)
    }
  }

  render(){
    return (
      <>
        {
          routes.map((route, i)=>{
            return(
              <Route key={i} path={route.path} exact={route.exact} component={route.component}/>
            )
          })
        }
      </>
    );
  }
}

export default withRouter(App);


