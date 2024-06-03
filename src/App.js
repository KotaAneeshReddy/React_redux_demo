import './App.css';
import {Provider} from 'react-redux'
import store from './redux/Store';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import HooksIceCreamContainer from './Components/HooksIceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksIceCreamContainer/>
      <HooksCakeContainer/>
      {/* <CakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
