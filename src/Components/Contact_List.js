import { useContext } from "react";
import { Link } from "react-router-dom";
import Contact_Card from "./Contact_Card";
import { ContactContext } from "./Context/ContactContext";

const Contact_List = () => {

    document.title = "User List";

    const { allContact } = useContext(ContactContext);
    
    console.log(allContact)

    return ( // main
        
        <div className="ui celled list">
            <h1>Contact List</h1>
            <Link to='/contact_add' className="ui button basic blue right">Add Contact</Link>

            {
                allContact && allContact.map(con => <Contact_Card info={con} key={con.id} />)
            }
        </div>
    );
};

export default Contact_List;