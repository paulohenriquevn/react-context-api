import React, { Component } from 'react'

import { Consumer } from '../../providers';
import RootProvider from '../../providers/root';
import LoginProvider from '../../providers/login';
import { Header } from '../../organinsms/header';
import Loading from '../../atoms/loading/';
import Login from '../login';

export class MainTemplate extends Component {
  render() {
    return (
      <RootProvider>
        <Consumer>
          {(context) => (
            <div>
              <Header />
              <main className="container mt-5">
                <p>{context.state.nome}</p>
                { this.props.children }
              </main>
              <LoginProvider>
                  <Login {...{ showLoading: context.actions.showLoading, hideLoading: context.actions.hideLoading }}/>
             </LoginProvider>
             <Loading {...{ loading: context.state.loading, message: context.state.message }} />
            </div>
        )}
        </Consumer>
      </RootProvider>
    )
  }
}