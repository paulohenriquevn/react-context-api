import React, { Component } from 'react'

import { Consumer } from '../../providers';
import RootProvider from '../../providers/root';
import { Header } from '../../organinsms/header';
import Loading from '../../atoms/loading/';

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
              <button className="todo-delete-button"
                onClick={(e) => context.actions.login("", "")}>
                Teste
             </button>
             <Loading {...{ loading: context.state.loading, message: context.state.message }} />
            </div>
        )}
        </Consumer>
      </RootProvider>
    )
  }
}