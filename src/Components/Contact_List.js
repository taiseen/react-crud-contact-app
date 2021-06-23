import { useContext } from "react";
import { Link } from "react-router-dom";
import Contact_Card from "./Contact_Card";
import { ContactContext } from "./Context/ContactContext";

const Contact_List = () => {
    document.title = "User List";

    const { allContact, setSearch , searchResult } = useContext(ContactContext);

    return ( // main

        <div className="ui celled list">
            <h1>Contact List</h1>
            <div className="flex">
                <Link to='/contact_add' className="ui button basic blue right">Add Contact</Link>
                <div className="ui search" style={{ marginTop: 15 }}>
                    <div className="ui icon input">
                        <input
                            type="text"
                            placeholder="Search Contacts"
                            className="prompt"
                            onChange={e => setSearch(e.target.value)} /> 
                        <i className="search icon"></i>
                    </div>
                </div>
            </div>

            {
                searchResult  
                ? searchResult.map(con => <Contact_Card info={con} key={con.id} />)
                : allContact.map(con => <Contact_Card info={con} key={con.id} />)
            }

        </div>
    );
};

export default Contact_List;