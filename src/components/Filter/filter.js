import React from "react"
import PropTypes from 'prop-types'

export default function Filter({ handleFilter }) {
return (
    <label
    className="filter"
    > 
      Find contacts by name
      <input 
      type="name"
      name="filter"
      onChange={handleFilter}
      ></input>
      </label>
)
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired
}