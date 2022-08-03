import React, { useEffect } from "react";
import { Link } from "react-router-dom";

let UserDetails = (props) => {

    useEffect(() => {
        props.getDetails(props.match.params.anything)
    }, [])

    return (
        <>
            <Link to="/" className="">Back to Search</Link>
            Hireable : {props.user.hireable ? (
                <i className="fa fa-check text-success" />) : (
                <i className="fa fa-times-check text-danger" />)
            }

            <div className="">
                <div className="">
                    <img src={props.user.awatar_url} />
                    <h1>{props.user.name}</h1>
                    <p>location: {props.user.location}</p>
                </div>
                <div className="">
                    {props.user.bio && (
                        <>
                            <h1>Bio</h1>
                            <p>{props.user.bio}</p>
                        </>
                    )}

                    <a href={props.user.html_url} >Visit GitHub Profile</a>
                    <ul>
                        <li>
                            {props.user.company && (
                                <>
                                    <p>company: {props.user.company}</p>
                                </>
                            )}
                        </li>
                        <li>
                            {props.user.blog && (
                                <>
                                    <p>blog: {props.user.blog}</p>
                                </>
                            )}
                        </li>
                        <li>
                            {props.user.login && (
                                <>
                                    <p>login: {props.user.login}</p>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="">
                <div className="">Followers: {props.user.Followers}</div>
                <div className="">Followers: {props.user.Followers}</div>
                <div className="">Followers: {props.user.Followers}</div>
                <div className="">Followers: {props.user.Followers}</div>
            </div>
        </>
    )
}

export default UserDetails;