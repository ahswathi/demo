import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";


let UserDetails = (props) => {

    useEffect(() => {
        details()
    }, [])
    const location = useParams()

    const [desc, setdetails] = useState([]);


    const details = async (name) => {
        const response = await axios.get(`https://api.github.com/users/${location.login}`)
        setdetails(response.data)
        console.log(desc)
    }
    console.log(location)
    return (
        <>

            <div className="grid mx-[10%] mt-[40px] ">
                <div className="ms-0 text-xl">
                    <Link to="/" className=" h-[300px] w-[300px] mx-[20%] mt-[40px] bg-slate-900 text-white p-2 rounded-sm">Back to Search</Link>
                    Hireable : {desc.hireable ? (
                        <i class="fa-solid fa-check text-xl text-green-700" />) : (
                        <i class="fa-solid fa-circle-xmark text-xl text-red-700" />
                    )
                    }
                </div>


                <div className=" mx-[10%] mt-[40px] border-4 border-grey-500/50 shadow-lg shadow-blue-500/50 ">

                    <div className="flex  mt-4 mx-[10%]">
                        <div className="">
                            <div className="h-[220px] w-[220px]">
                                <img src={desc.avatar_url} className="items-center rounded-full h-full w-full " />
                            </div>
                            <h1 className="text-2xl mt-4">{desc.name}</h1>
                            <p className="text-[16px]">Location: {desc.location}</p>
                        </div>

                        <div className="ml-[20%]">
                            {desc.bio && (
                                <>
                                    <h1 className="text-2xl mt-4">Bio</h1>
                                    <p className="text-[16px]">{desc.bio}</p>
                                </>
                            )}
                            <a href={desc.html_url} >Visit GitHub Profile</a>
                            <ul>
                                <li className="mb-2">
                                    {desc.company && (
                                        <>
                                            <p className="text-[16px]">Company: {desc.company}</p>
                                        </>
                                    )}
                                </li>
                                <li className="mb-2">
                                    {desc.blog && (
                                        <>
                                            <p className="text-[16px]">Website: {desc.blog}</p>
                                        </>
                                    )}
                                </li>
                                <li className="mb-2">
                                    {desc.login && (
                                        <>
                                            <p className="text-[16px]">User Name: {desc.login}</p>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex  flex-row  justify-between mx-[20%] mt-[2%] mb-6 ">
                        <div className="p-2 rounded-md  text-blue-900 bg-red-400">Followers: {desc.followers}</div>
                        <div className="p-2 rounded-md  text-blue-900 bg-green-400">Followers: {desc.followers}</div>
                        <div className="p-2 rounded-md  text-blue-900 bg-yellow-400">Followers: {desc.followers}</div>
                        <div className="p-2 rounded-md  text-blue-900 bg-blue-400">Followers: {desc.followers}</div>
                    </div>
                </div>


            </div>

            {/*

        <Link to="/" className="h-[300px] w-[300px]">Back to Search</Link>
            Hireable : {props?.value?.hireable ? (
                <i className="fa fa-check text-success" />) : (
                <i className="fa fa-times-check text-danger" />)
            }

            <div className="">
                <div className="">
                    <img src={props.value.avatar_url} />
                    <h1>{props.value.name}</h1>
                    <p>location: {props.value.location}</p>
                </div>
                <div className="">
                    {props.value.bio && (
                        <>
                            <h1>Bio</h1>
                            <p>{props.value.bio}</p>
                        </>
                    )}

                    <a href={props.value.html_url} >Visit GitHub Profile</a>
                    <ul>
                        <li>
                            {props.value.company && (
                                <>
                                    <p>company: {props.value.company}</p>
                                </>
                            )}
                        </li>
                        <li>
                            {props.value.blog && (
                                <>
                                    <p>blog: {props.value.blog}</p>
                                </>
                            )}
                        </li>
                        <li>
                            {props.value.login && (
                                <>
                                    <p>login: {props.value.login}</p>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="">
                <div className="">Followers: {props.value.Followers}</div>
                <div className="">Followers: {props.value.Followers}</div>
                <div className="">Followers: {props.value.Followers}</div>
                <div className="">Followers: {props.value.Followers}</div>
            </div> */}
        </>
    )
}

export default UserDetails;