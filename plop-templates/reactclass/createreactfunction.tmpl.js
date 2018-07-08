import React from 'react';
import { Consumer } from '.';

export const {{reactFeature}} = (/*{destructure props here}*/) => (
      <Consumer>
        {(context) => {
          const { state, actions } = context;
          const {stateVar1, stateVar2} = state;
          const {action1, action2} = actions;

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
