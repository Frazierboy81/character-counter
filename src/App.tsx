
import './App.css';
import ColorPicker from './components/ColorPicker';
import ContentSwitcher from './components/ContentSwitcher';

import Toggler from './components/Toggler';


function App() {

  return (
    <div>
      <h1>Character Counter App</h1>

      <ColorPicker/>
      <Toggler/>
      <ContentSwitcher/>
    </div>
  )
}

export default App;
