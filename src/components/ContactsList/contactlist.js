import React from "react"


export default function ContactList({ contacts, remuveContact}) {
  return ( 
  <>
    <ul 
    className="contactList"
    > {
    contacts.map(({ id, name, number }) => (
        <li 
        className="contactListItem"
        key={id}
        id={id}
        ><p>
        {name}: {number}
        </p>
        <button 
        className="buttonDelete"
        type="button"
        onClick={() => {remuveContact(id)}}
        >delete</button>
        </li>
        ))
    } 
    </ul> 
    </>
  )
}