import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContactContext } from './Context/ContactContext';
import user from '../img/user.png';

const Contact_Card = ({ info }) => {

    const { contactDelete } = useContext(ContactContext);

    const { id, name, email } = info;

    const iconStyle = {
        cursor: 'pointer'
    }

    const handleEdit = (id) => {
        console.log("Edit", id)
    }

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`}>
                    <div className="header">{name || "Missing"}</div>
                    <div>{email || "Missing"}</div>
                </Link>
            </div>
            <i className="edit alternate outline icon blue"
                style={iconStyle}
                onClick={() => handleEdit(id)}></i>
            <i className="trash alternate outline icon red"
                style={iconStyle}
                onClick={() => contactDelete(id)}></i>
        </div>
    );
};

export default Contact_Card;