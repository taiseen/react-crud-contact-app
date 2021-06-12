import user from '../img/user.png';

const Contact_Card = ({ info }) => {

    const { id, name, email } = info;

    const iconStyle = {
        cursor: 'pointer'
    }

    const handleDelete = (id) => {
        console.log("Delete", id)
    }

    const handleEdit = (id) => {
        console.log("Edit", id)
    }
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name || "Missing"}</div>
                <div>{email || "Missing"}</div>
            </div>
            <i className="edit alternate outline icon blue"
                style={iconStyle}
                onClick={() => handleEdit(id)}></i>
            <i className="trash alternate outline icon red"
                style={iconStyle}
                onClick={() => handleDelete(id)}></i>
        </div>
    );
};

export default Contact_Card;