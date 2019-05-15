import React from 'react'

const InputFields = () => {
  return (
    <>
      <div>
        <label>Distance</label>
        <input id="distance" onChange={this.onChange.bind(this)}></input>
      </div>

      <select id="gender" onChange={this.onChange.bind(this)}>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <div>
        <label>Age</label>
        <input id="age" onChange={this.onChange.bind(this)}></input>
      </div>
    </>
  )
}

export default InputFields