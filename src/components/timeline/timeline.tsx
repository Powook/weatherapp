import { connect } from "react-redux";
import {BarChart} from "../Chart/Chart";
import styles from './timeline.module.css'
import {CategoryScale} from 'chart.js'; 

export function TimeLine (props:any) {
  // console.log(props.weatherList)
  return <>
    <div className={styles.timelineTime}>
      {props.weatherList?.map((item:any, index:number)=>index%5===0? <span>{(item.dt_txt).split(' ')[1]}</span>:null)}
    </div>
    <div className={styles.timeLineGraph}>
      {props.weatherList ? <BarChart temp={props.weatherList}/> : null}
    </div>
    <div className={styles.timelineTemp}>
      { props.weatherList?.map((item:any, index:number)=> index%5===0? <span>{(item.main.temp/57.32).toFixed(2)+ ' '}</span>: null)}
    </div>
  </>
}
  function mapStateToProps(state:any) {
    return {
      weatherList: state.weatherReducer.weatherReducer.weather?.list
    }
  }

export const TimeLineContainer = connect(mapStateToProps)(TimeLine)

