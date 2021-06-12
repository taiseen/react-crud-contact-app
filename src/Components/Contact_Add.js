import { useContext, useState } from "react";
import { ContactContext } from './Context/ContactContext';
import { v1 as uuidV1 } from 'uuid';

const Contact_Add = () => {

    const { addNewContact } = useContext(ContactContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email) {
            const userInfo = { id: uuidV1(), name, email };
            addNewContact(userInfo);
        } else {
            alert('All Field Mandatory');
        }

        setName('');
        setEmail('');
    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleSubmit}>

                <div className="field">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="field">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <input className="ui button blue" type="submit" value="Add Contact" />
            </form>
        </div>
    );
};

export default Contact_Add;