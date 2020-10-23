import React from "react"

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