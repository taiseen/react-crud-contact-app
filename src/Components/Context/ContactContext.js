import { createContext, useEffect, useState } from 'react';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {

    const KEY = 'allContact';
    const [allContact, setAllContact] = useState([]);

    // store all new contact
    const addNewContact = (contact) => {
        const newContact = [...allContact, contact];
        setAllContact(newContact);
    }

    // it must be 1st 
    useEffect(() => {
        const contacts = JSON.parse(localStorage.getItem(KEY));
        if (contacts) setAllContact(contacts);
    }, []);
    
    // it must be 2nd 
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(allContact));
    }, [allContact])


    return (
        <ContactContext.Provider value={{ allContact, addNewContact }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;