import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import { Line } from 'react-chartjs-2'

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

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      dataIndex = (
        <>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </>
      )
    }

    let data = {
      datasets: [{
        data: distances,
      }],
      labels: labels
    };

    return (
      <>
        {dataIndex}
        <Line 
          data={data}/>
      </>
    )
  }
}

export default DisplayPerformanceData