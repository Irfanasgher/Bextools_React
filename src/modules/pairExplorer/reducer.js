import { PAIR_EXPLORER_PAIR, PAIR_EXPLORER_TRADES } from "./actions";

const initialState = {
  trades: [],
  pair: {},
};

function pairExplorerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case PAIR_EXPLORER_TRADES:
      return {
        ...state,
        trades: payload.trades,
      };
    case PAIR_EXPLORER_PAIR:
      return {
        ...state,
        pair: payload.pair,
      };
    default:
      return state;
  }
}

export default pairExplorerReducer;
