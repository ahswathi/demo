import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {

    /*  console.log(props.users) */
    return (

        <>
        <div className="grid  grid-cols-4  items-center mb-[4%]  mx-[10%]">

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