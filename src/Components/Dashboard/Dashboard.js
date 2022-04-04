import React from 'react'
import useCharts from '../../hook/Chart'
import { Dash } from '../Dash/Dash'

export const Dashboard = () => {
  // const [charts, setCharts] = useCharts()
  return (
    <div>
      {/* {
      charts.map(dash=><Dash
      dash = {dash}
      ></Dash>)
      } */}
      <Dash></Dash>
    </div>
  )
}
