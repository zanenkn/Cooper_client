import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }

  //   indexUpdated() {
  //   this.setState({ updateIndex: false })
  // }

  componentDidMount() {
    this.getPerformanceData()
  }
  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries})}

  render () {
    let dataIndex;
    let distances = []
    let labels = []

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        let dateString = entry.created_at;
        let dateObj = new Date(dateString);
        let momentObj = moment(dateObj)
        let momentString = momentObj.format('YYYY-MM-DD');
        distances.push(entry.data.distance)
        labels.push(momentString)
      })
      dataIndex = (
        <>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </>
      )
    }

    let data = {
      labels: labels,
      datasets: [{
        label: "My runs",
        data: distances,
        fill: false,
        lineTension: 0.1,
        borderColor: "#00cc99",
      }],
    }

  //   options: {
  //     bezierCurve: false
  //   }
  // }

    return (
      <>
        {dataIndex}
        <Line
          data={data}
          />
      </>
    )
  }
}

export default DisplayPerformanceData