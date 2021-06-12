import { useContext } from "react";
import Contact_Card from "./Contact_Card";
import { ContactContext } from "./Context/ContactContext";

const Contact_List = () => {

    const { allContact } = useContext(ContactContext);

    return ( // main
        
        <div className="ui celled list">
            <h1>Contact List</h1>
            <button className="ui button blue right">Add Contact</button>

            {
                allContact?.map(con => <Contact_Card info={con} key={con.id} />)
            }
        </div>
    );
};

export default Contact_List;