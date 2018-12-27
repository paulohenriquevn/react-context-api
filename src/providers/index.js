import React, { Component } from 'react';

// Create a context
export const StateContext = React.createContext(null);
export const {Provider, Consumer} = StateContext;

export class BaseProvider extends Component {
    constructor() {
        super();
        this.setup = this.setup.bind(this);
    }

    setup() {
        let map = {};
        map.state = this.state;
        map.actions = this.actions;
        return map;
    }
    render () {
        let map = this.setup();
        // this.props = {...this.props.children.props};
        return (
          <Provider value={map}>
            {this.props.children}
          </Provider>
        )
      }
}
