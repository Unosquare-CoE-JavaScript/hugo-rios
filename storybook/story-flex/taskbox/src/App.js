import { Provider } from 'react-redux';
import store from './redux/store'

import { PureInboxScreen } from './components/InboxScreen';

import './index.css';

function App() {
  return (
    <Provider store={store}>
      <PureInboxScreen />
    </Provider>
  );
}
export default App;