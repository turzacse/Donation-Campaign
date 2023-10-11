import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="mx-20">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;