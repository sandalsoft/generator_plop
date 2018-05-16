import React from 'react';
import { Consumer } from '.';

export class {{reactFeature}} extends React.Component {
  
  render() {
    return (
      <Consumer>
        {(context) => {
          const { state, actions } = context;

          return state.data ? (
            <React.Fragment>
            state.data is truthy
            </React.Fragment>
          ) : (
            <React.Fragment>
              state.data is falsey
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

