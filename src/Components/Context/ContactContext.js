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
        const newContact = [...allContact, response.data];
        setAllContact(newContact);
    }

    const contactDelete = async (id) => {

        // delete from database 
        await api.delete('/contact/' + id);

        // remove & refresh from UI
        const contacts = allContact.filter(con => con.id !== id);
        setAllContact(contacts);
    }

    const updateContact = async (contact) => {
        const response = await api.put('/contact/' + contact.id, contact);
        const newContact = allContact.map(contact => contact.id === response.data.id ?
            { ...response.data } : contact);
        setAllContact(newContact);
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
        <ContactContext.Provider value={{ allContact, addNewContact, contactDelete, updateContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;