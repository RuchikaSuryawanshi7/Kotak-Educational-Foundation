import React, { Component } from 'react'
import Plot from 'react-plotly.js'
export default class PiePlot extends Component {
  
  render() {
    return (
      <div>
        <Plot
            data={[{
                values: [25,30,54, 32, 5],
                labels:['videos','audio','quiz','presentation', 'demo-1'],
                type:'pie'
            }]}
            layout={{width:500,height:500,title:'piechart'}}
        />
      </div>
    )
  }
}