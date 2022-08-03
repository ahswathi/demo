import React from "react";
import { Link } from "react-router-dom";


const UserItem = (props) => {
    const { login, avatar_url } = props.value;
    return (
        <div className="grid place-items-center border-4 border-grey-500/50 shadow-lg shadow-blue-500/50 mt-[40px] py-4 h-[280px] w-[280px] ">
            <div className="h-[180px] w-[180px]">
            <img src={avatar_url} className="items-center rounded-full w-full h-full " />
            </div>
            <p className="text-center font-serif font-bold text-xl p-2"> {login}</p>
            <Link to={`/user/${login}`} className="rounded-sm px-6 mb-4 mx-[25%]  text-center  text-white bg-blue-700">More . . .</Link>
        </div>



    )
}
export default UserItem;