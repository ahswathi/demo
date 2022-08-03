import React from "react";
import { Link } from "react-router-dom";


const UserItem = (props) => {
    const { login, avatar_url } = props.value;
    return (
        <div className="grid items-center border-4 border-grey-500/50 shadow-lg shadow-blue-500/50 mt-[40px]  px-[20%] h-[300px] w-[300px] py-6">
            <div className="h-[180px] w-[180px]">
            <img src={avatar_url} className="items-center rounded-full w-full h-full " />
            </div>
            <p className="text-center font-serif font-bold text-xl p-2"> {login}</p>
            <Link to={`/user/${login}`} className="rounded-sm px-4 py-1 mx-[25%] text-center  text-white bg-blue-700">More</Link>
        </div>



    )
}
export default UserItem;