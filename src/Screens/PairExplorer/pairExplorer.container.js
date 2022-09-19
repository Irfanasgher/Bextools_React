import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PairExplorer from "./PairExplorer";

const mapStateToProps = (state) => ({
  trades: state.pairExplorerReducer.trades,
  pair: state.pairExplorerReducer.pair,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PairExplorer);
