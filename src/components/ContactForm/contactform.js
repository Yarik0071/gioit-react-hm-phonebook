import React, { Component } from "react"
import PropTypes from 'prop-types'

export default class ContactForm extends Component {

  state = {
    name: '',
    number: ''
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target 

    this.setState({
      [name]: value
    })
  }

  filterName = () => {
    const { contacts, addContact } = this.props
    const { name, number } = this.state

    let initialValue = contacts.filter(item => item.name === name)
    if(initialValue.length > 0) {
      alert(`${name} is already in contacts`)
    } else {
      addContact(name, number)
    }
  }


  handleSubmit = e => {
    e.preventDefault()
    const { addContact } = this.props
    const { name, number } = this.state

    this.props.contacts.length > 0 ? this.filterName() : addContact(name, number)

    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    const { name, number } = this.state
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className="formInput"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Number
          <input
            className="formInput"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit" className="buttonSubmit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  addContact: PropTypes.func.isRequired
}