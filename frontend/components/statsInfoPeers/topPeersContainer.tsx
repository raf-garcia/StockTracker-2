import { connect } from 'react-redux';
import TopPeers from './topPeers';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  topPeers: state.quotes.topPeers,
  fetchingStatus: selectFetchingStatus(state, 'topPeers'),
});

export default connect(
  mapStateToProps,
  null
)(TopPeers);
