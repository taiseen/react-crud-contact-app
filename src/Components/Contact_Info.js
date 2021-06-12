import user from '../img/user.png';

const Contact_Info = (props) => {
    console.log(props);
    const { history, location, match } = props;
    const { id, name, email } = location.state;

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