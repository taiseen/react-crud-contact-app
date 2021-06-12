import { Link } from 'react-router-dom';
import user from '../img/user.png';

const Contact_Info = (props) => {

    const { history, location, match } = props;
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
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Contact_Info;