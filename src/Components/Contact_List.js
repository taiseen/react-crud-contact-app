import { useContext } from "react";
import Contact_Card from "./Contact_Card";
import { ContactContext } from "./Context/ContactContext";

const Contact_List = () => {

    const { allContact } = useContext(ContactContext);

    return (
        <div className="ui celled list">
            {
                allContact?.map(con => <Contact_Card info={con} key={con.name} />)
            }
        </div>
    );
};

export default Contact_List;