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
    const divStyle = {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
    }

    return (

        <div className="item" style={divStyle}>

            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    {/* <Link to={`/contact/${id}`}> */}
                    <Link to={{ pathname: `/contact/${id}`, state: info }}>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
            </div>

            <div >
                {/* Edit Option */}
                <Link to={{ pathname: `/contact_edit/${id}`, state: info }}>
                    <i className="edit alternate outline icon blue" style={iconStyle}></i>
                </Link>

                {/* Delete Option */}
                <Link to="">
                    <i className="trash alternate outline icon red" style={iconStyle}
                        onClick={() => contactDelete(id)}></i>
                </Link>
            </div>

        </div>
    );
};

export default Contact_Card;