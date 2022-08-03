import React from "react";
import {Link} from "react-router-dom";

let Navbar = () => {
    return(
        <>
        <div className="flex justify-between px-[80px] bg-blue-700">
                <div className=" py-4 text-2xl flex justify-center">
                    <i className="fa-brands  fa-github mx-4 py-1 text-white fs-1  me-2"></i>
                    <h1 className="text-white ">Github</h1>
                </div>
               
                <div className="py-4 text-xl">
                <ul className="flex justify-between mx-4">
                    <li className="text-white mx-4 p">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                </div>
            </div>
            </>
    )
}
export default Navbar;
