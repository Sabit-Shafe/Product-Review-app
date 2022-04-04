import { data } from 'autoprefixer'
import React from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts'
import useCharts from '../../hook/Chart'

export const Dash = () => {
  // const {dash} = props;
  // console.log(props)
  // const { investment, month, sell , revenue} = props;
  const [charts, setCharts] = useCharts()


  return (
    <div className='px-5 py-5'>
      <h2 className='text-xl text-blue-700'>Area Chart</h2>
      <AreaChart width={700} height={350} data={charts}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        <Area type="monotone" dataKey="revenue" stroke="#ba55d3" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>

      <BarChart className='py-5' width={700} height={350} data={charts}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="sell" fill="#82ca9d" />
        <Bar dataKey="revenue" fill="#800080" />
      </BarChart>

      <RadarChart outerRadius={90} width={730} height={250} data={charts}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Mike" dataKey="sell" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="revenue" stroke="#9932cc" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </div>
  )
}
