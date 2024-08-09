import React, { useState, useEffect } from "react"; 

const ProfileStatusWithHooks = props => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = (() => {
    setEditMode(true);
  });

  const deactivateEditMode = (() => {
    setEditMode(false);
    props.setStatus(status);
  });

  const onStatusChange = ((e) => {
    setStatus(e.currentTarget.value);
  });

  useEffect(() => {
    setStatus(props.status)
  },[props.status])

  return <div>
            {!editMode 
            ? <div><span onDoubleClick={activateEditMode}>{status}</span></div> 
            : <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text" value={status} /></div>}                
        </div>;
};

export default ProfileStatusWithHooks;