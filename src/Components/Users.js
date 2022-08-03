import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {

    /*  console.log(props.users) */
    return (

        <>
        <div className="grid  grid-cols-4 lg:grid-cols-4 items-center   lg:mx-[10%] lg:mt-[20px]">

            {
                props.users.map((value) => {
                    return (
                        <UserItem value={value}/>
                    )
                }
                )
            }
            </div>
        </>

    )
}
export default Users;