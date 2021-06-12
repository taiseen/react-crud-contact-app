import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="ui menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
                <Link to="/"><i className="arrow circle left icon"/> </Link>
                <Link to="/contact_add" > <i className="arrow circle right icon"></i> </Link>
            </div>
        </div>
    );
};

export default Header;