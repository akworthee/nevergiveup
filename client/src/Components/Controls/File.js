import React from "react";

const File = (props)=>{
   const onChangeInput=(e)=>{
        props.handleInput(e.target.id, e.target.files[0])
    }
return(
    <>
    <input id={props.fileId} type="file" onChange={onChangeInput}></input>
    </>
)
}

export default File;