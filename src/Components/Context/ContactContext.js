// 12-Jun-2021
import { createContext, useEffect, useState } from 'react';
import api from '../BaseURL';

export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {

    const KEY = 'allContact';
    const [allContact, setAllContact] = useState([]);
    console.log(allContact)

    // store all new contact
    const addNewContact = async (contact) => {
        // send to database
        const response = await api.post('/contact', contact);
        const newContact = [...allContact, response];
        setAllContact(newContact);
    }

    const contactDelete = (id) => {
        const contacts = allContact.filter(con => con.id !== id);
        setAllContact(contacts);
    }

    // it must be 1st 
    useEffect(() => {
        // localStorage
        // const contacts = JSON.parse(localStorage.getItem(KEY));
        // if (contacts) setAllContact(contacts);

        (async () => {
            console.log('axios get call')
            const response = await api.get('/contact');
            if (response.data) setAllContact(response.data);
        })();

    }, []);


    // it must be 2nd 
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(allContact));
    }, [allContact])


    return (
        <ContactContext.Provider value={{ allContact, addNewContact, contactDelete }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;