
import './App.css';
import ColorPicker from './components/ColorPicker';
import ContentSwitcher from './components/ContentSwitcher';
import CharacterCounter from './components/CharacterCounter';
import Toggler from './components/Toggler';



function App() {

  return (
    <div>
      <h1>Character Counter App</h1>

      <ColorPicker/>
      <Toggler/>
      <ContentSwitcher/>
      <CharacterCounter/>
      
    </div>
  )
}

export default App;
