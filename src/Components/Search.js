import React from "react";
import { useState } from "react";

const Search = (props) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchName(text)
        setText('');
    }

    return (
        <>
            <div className="mx-[30%] mt-[4%]">
                <form className="form" onSubmit={handleSubmit} >
                    <input type="text" name="text" placeholder="Search here"
                        className="w-full p-2"
                        value={text} onChange={(e) => setText(e.target.value)} />
                    <br />
                    <input type="Submit" className="bg-gray-700 w-[20%] mt-3 p-2 mr-[30%] text-white" value="Submit" />
                   {props.showclear &&
                    <button className="w-[20%] p-2 ml-[30%] bg-sky-400" onClick={props.clearUsers}>Clear</button>
                
                }

                </form>
            </div>
        </>
    );
}
export default Search;