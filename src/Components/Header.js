import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    const path = location.pathname;

    let btn;
    if (path === '/contact_add' || path === "/contact_edit/" + ('\/[a-z0-9]\/gm') )
    {
        btn = <Link to="/"><i className="arrow circle left icon" /></Link>;
    } else {
        btn = <Link to="/contact_add"><i className="arrow circle right icon"></i></Link>;
    }

    return (
        <div className="ui menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
                {
                    btn
                }
            </div>
        </div>
    );
};

export default Header;