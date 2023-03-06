import React from 'react';
import './App.css';
import { City } from './components/City/City';
import  {WeatherDisplayContainer}  from './components/weatherDisplayContainer'
import styles from './container.module.css'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWindow}>
        <div className={styles.weatherIndication}>
          <WeatherDisplayContainer/>
        </div>
        <div className={styles.weatherInfo}>
          <City/>
        </div>
        <div className={styles.addInfo}>

        </div>
      </div>
    </div>
  );
}

export default App;
