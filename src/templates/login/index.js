import React, { Fragment } from 'react';
import { Consumer } from '../../providers';

const Login = () => {
    return (
      <Consumer>
        {({state, actions}) => (
          <Fragment>
          <p>Teste</p>
          <span className="time">{state.nome}</span>
          <button onClick={(e)=> actions.login()}>Teste</button>
          </Fragment>
        )}
      </Consumer>
    );
}

export default Login;