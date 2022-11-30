import './App.css';
import GameWithCharacter from './components/GameWithCharacter';
import ContentManager from './components/content-management/ContentManager';
const modes = {
  PLAY: 'play',
  EDIT: 'edit'
};
function App() {
  const mode = modes.PLAY;
  return (
    <div className="App">
      {mode === modes.PLAY ? <GameWithCharacter /> : <ContentManager />}
    </div>
  );
}

export default App;
