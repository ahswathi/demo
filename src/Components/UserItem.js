import React from "react";
import { Link } from "react-router-dom";


const UserItem = (props) => {
    const { login, avatar_url } = props.value;
    return (
        <div className="grid items-center border-4 border-grey-500/50 shadow-lg shadow-blue-500/50 lg:mt-[40px]  lg:px-[20%] lg:h-[300px] lg:w-[300px] lg:py-6">
            <div className="lg:h-[180px] lg:w-[180px]">
            <img src={avatar_url} className="items-center rounded-full lg:w-full lg:h-full " />
            </div>
            <p className="text-center font-serif font-bold lg:text-xl lg:p-2"> {login}</p>
            <Link to={`/user/${login}`} className="rounded-sm lg:px-4 lg:py-1 lg:mx-[25%] text-center  text-white bg-blue-700">More</Link>
        </div>



    )
}
export default UserItem;