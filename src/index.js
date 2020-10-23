import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {v4 as uuidv4} from 'uuid';
import ContactList from "./components/ContactsList/contactlist.js"
import ContactForm from "./components/ContactForm/contactform.js"
import Filter from "./components/Filter/filter.js"

import "./components/ContactForm/contactform.css"
import "./components/ContactsList/contactlist.css"
import "./components/Filter/filter.css"

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  changeFilter = () => {
    const { contacts, filter } = this.state

    return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  }

  
  addContact = (value1, value2) => {
    const contact = {
      name: value1,
      number: value2,
      id: uuidv4()
    }



    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      } 
    } 
    )
  }

  filterName = value => {
    this.state.contacts.map(item => item.name === value && alert("stop!"))
  }

  handleFilter = e =>{
    e.preventDefault()

    this.setState({
      filter: e.target.value
    })
  }

  remuveContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== id)
      }
    })
  }

   render() {
    const filterContact = this.changeFilter();
     return ( 
  <>
  <div>
  <h1>Phonebook</h1>
  <ContactForm  
  addContact={this.addContact}
  contacts={this.state.contacts}
  />

  <h2>Contacts</h2>
  <Filter  
  handleFilter={this.handleFilter}
  />
  { filterContact.length > 0 &&
    <ContactList  
    contacts={filterContact}
    remuveContact={this.remuveContact}
    />
  } 
</div>
</>
     )
}
}

ReactDOM.render( <App /> , document.getElementById('root'));