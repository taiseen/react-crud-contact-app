import { useContext, useState } from "react";
import { ContactContext } from './Context/ContactContext';
import { v1 as uuid } from 'uuid';
import { useHistory } from "react-router";

const Contact_Add = () => {

    const { addNewContact } = useContext(ContactContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email) {
            const userInfo = { id: uuid(), name, email };
            addNewContact(userInfo);
        } else {
            alert('All Field Mandatory');
        }

        setName('');
        setEmail('');
        history.push('/');
    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleSubmit}>

                <div className="field">
                    <label htmlFor="">Name</label>
                    <input
                        required
                        type="text"
                        name='name'
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="field">
                    <label htmlFor="">Email</label>
                    <input
                        required
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