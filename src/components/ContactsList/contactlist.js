import React from "react"
import PropTypes from 'prop-types'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import "../../css/move.css"


export default function ContactList({ contacts, remuveContact }) {
  return (
    <>
      <TransitionGroup component='ul' className="contactList">
        {contacts.map(({ id, name, number }) => (
          <CSSTransition 
          key={id}
          timeout={250}
          classNames="listItem"
          >
          <li className="contactListItem" key={id} id={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className="buttonDelete"
              type="button"
              onClick={() => {
                remuveContact(id);
              }}
            >
              X
            </button>
          </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

ContactList.propTypes = {
  remuveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired)
}