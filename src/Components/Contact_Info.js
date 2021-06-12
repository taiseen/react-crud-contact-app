import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContactContext } from "./Context/ContactContext";
import user from '../img/user.png';

const Contact_Info = () => {

    const { id } = useParams();
    const { allContact } = useContext(ContactContext);

    const [contactDetail, setContactDetail] = useState({});

    const person = allContact.find(contact => contact.id == id);

    useEffect(() => {
        setContactDetail(person);
    }, []);

    const { name, email } = contactDetail;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="contest">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>


        </div>
    );
};

export default Contact_Info;