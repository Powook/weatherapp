import React from 'react';
import './App.css';
import { TimeLineContainer } from './components/timeline/timeline';
import  {WeatherDisplayContainer}  from './components/weatherDisplayContainer'
import styles from './container.module.css'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWindow}>
        <div className={styles.weatherIndication}>
          <WeatherDisplayContainer/>
          <TimeLineContainer/>
        </div>
        <div className={styles.weatherInfo}>

        </div>
        <div className={styles.addInfo}>

        </div>
      </div>
    </div>
  );
}

export default App;
