import './App.css';
import { EnergySchedule } from './components/EnergySchedule';
// import { GarageSchedule } from './components/GarageSchedule';
// import { StairsSchedule } from './components/StairsSchedule';

function App() {
  return (
    <div className="App">
      <main>
        {/* <GarageSchedule /> */}
        {/* <StairsSchedule /> */}
        <EnergySchedule />
      </main>
    </div>
  );
}

export default App;
