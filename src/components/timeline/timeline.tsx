import { connect } from "react-redux";
import {BarChart} from "../Chart/Chart";
import styles from './timeline.module.css'

export function TimeLine (props:any) {
  return <div className={styles.timeLineGraph}>
      {props.weatherList ? <BarChart temp={props.weatherList}/> : null}
    </div>


}
  function mapStateToProps(state:any) {
    return {
      weatherList: state.weatherReducer.weatherReducer.weather?.list
    }
  }

export const TimeLineContainer = connect(mapStateToProps)(TimeLine)

