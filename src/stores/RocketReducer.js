import ACTIONS from '../constants';

const initialState = {
  fetching: false,
  rocket: undefined
};

const actionHandlers = {
  [ACTIONS.REQUEST_ROCKET_DETAILS]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_ROCKET_DETAILS]: ({ state, action }) => ({
    ...state,
    fetching: false,
    rocket: action.payload.rocket
  }),
  [ACTIONS.DISPLAY_LAUNCH_DETAILS]: ({ state }) => ({
    ...state,
    rocket: undefined
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
