import React from 'react'
import { Form, Select } from 'semantic-ui-react'

const InputFields = (props) => {
  const options = [female, male]
  return (
    <Form>
      <Form.Field>
        <div>
          <label>Distance</label>
          <input id="distance" onChange={props.inputChangeHandler}></input>
        </div>
      </Form.Field>

      <Select
        id="gender" onChange={props.inputChangeHandler}
        options={options}
      />

      <Form.Field>
        <div>
          <label>Age</label>
          <input id="age" onChange={props.inputChangeHandler}></input>
        </div>
      </Form.Field>
    </Form>
  )
}

export default InputFields