import { useContext, useEffect, useState } from "react";
import { ContactContext } from './Context/ContactContext';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Contact_Edit = ({ location }) => {

    document.title = "User Add";

    const { updateContact } = useContext(ContactContext);
    const { id, name: uName, email: uEmail } = location.state;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    useEffect(() => {
        setName(uName);
        setEmail(uEmail);
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();

        if (name && email) {
            const userInfo = { id, name, email };
            updateContact(userInfo);
        } else {
            alert('All Field Mandatory');
        }

        setName('');
        setEmail('');
        history.push('/');
    }




    return (
        <div className="ui main">
            <div className="flex">
                <h2>Edit Contact</h2>
                
                <Link to='/'>
                    <h2 className="ui black basic button  ">Back</h2>
                </Link>
            </div>

            <form className="ui form" onSubmit={handleUpdate}>

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

                <input className="ui red basic button" type="submit" value="Update Contact" />
            </form>
        </div>
    );
};

export default Contact_Edit;