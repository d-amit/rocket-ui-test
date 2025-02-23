import ACTIONS from "../constants";

const initialState = {
  launches: [],
  fetching: false
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),
  [ACTIONS.DISPLAY_LAUNCH_DETAILS]: ({ state, action }) => ({
    ...state,
    launchFlightNumber: action.payload.flightNumber
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
