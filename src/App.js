import './App.css';
import { ScheduleTable } from './components/ScheduleTable';
import { TopMessage } from './components/TopMessage';

function App() {
  return (
    <div className="App">
      <TopMessage />
      <main>
        <ScheduleTable />
      </main>
    </div>
  );
}

export default App;
