import { Link } from 'react-router-dom';
import user from '../img/user.png';

const Contact_Info = ({ location }) => {

    document.title = "User Info";


    const { id, name, email } = location.state;

    console.log(name, email);
    
    return (

        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="ui card centered">
                <Link to="/">
                    <h1 className="ui negative basic button">
                        Back to Contact List
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default Contact_Info;