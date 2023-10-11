import { NavLink } from "react-router-dom";
const Header = () => {
    const links = <>
    <li><NavLink to="/" >Home</NavLink></li>
    <li><NavLink to="/donation">Donation</NavLink></li>
    <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>
    return (
        <div className="">
            <div className="navbar bg-base-100 flex flex-col md:flex-row">
                <div className="flex-1">
                    <img src="https://i.ibb.co/KVN4Rmy/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;