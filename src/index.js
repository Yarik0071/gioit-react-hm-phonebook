import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group'
import {v4 as uuidv4} from 'uuid';
import ContactList from "./components/ContactsList/contactlist.js"
import ContactForm from "./components/ContactForm/contactform.js"
import Filter from "./components/Filter/filter.js"


import "./components/ContactForm/contactform.css"
import "./components/ContactsList/contactlist.css"
import "./components/Filter/filter.css"
import "./css/styles.css"
import "./css/move.css"

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount(){
    const persistedzcontacts = localStorage.getItem("contacts")

    if(persistedzcontacts) {
      this.setState({
        contacts: JSON.parse(persistedzcontacts)
      })
    }
  }

  componentDidUpdate( prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  changeFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = (value1, value2) => {
    const contact = {
      name: value1,
      number: value2,
      id: uuidv4(),
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  filterName = (value) => {
    this.state.contacts.map((item) => item.name === value && alert("stop!"));
  };

  handleFilter = (e) => {
    e.preventDefault();

    this.setState({
      filter: e.target.value,
    });
  };

  remuveContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const filterContact = this.changeFilter();
    return (
      <>
        <div>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="logotype"
          >
            <h1 className="logo">Phonebook</h1>
          </CSSTransition>

          <ContactForm
            addContact={this.addContact}
            contacts={this.state.contacts}
          />

          <h2>Contacts</h2>
      
            <CSSTransition
            in={this.state.contacts.length > 1}
            classNames="filter"
            timeout={250}
            unmountOnExit
            >
              <Filter handleFilter={this.handleFilter} />
            </CSSTransition>

          {filterContact.length > 0 && (
            <ContactList
              contacts={filterContact}
              remuveContact={this.remuveContact}
            />
          )}
        </div>
      </>
    );
  }
}

ReactDOM.render( <App /> , document.getElementById('root'));