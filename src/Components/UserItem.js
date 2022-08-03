import React from "react";
import { Link } from "react-router-dom";


const UserItem = (props) => {
    const { login, avatar_url } = props.value;
    return (
        <div className="grid items-center border-4 border-grey-500/50 shadow-lg shadow-blue-500/50 mt-[40px] mx-[2%] px-[25%]   py-6">
            <img src={avatar_url} className="rounded-full w-full h-full " />
            <p className="text-center font-serif font-bold text-xl p-2"> {login}</p>
            <Link to={`/user/${login}`} className="rounded-sm px-4 py-1 mx-[25%] text-center  text-white bg-blue-700">More</Link>
        </div>



    )
}
export default UserItem;