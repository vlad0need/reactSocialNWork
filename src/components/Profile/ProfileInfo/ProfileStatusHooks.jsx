import React, {useEffect, useState} from 'react';


const ProfileStatusHooks = (props) => {

    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
     setStatus(props.status)
    }, [props.status])

    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                       value={status}/>
            </div>
            }
        </>
    )

}

export default ProfileStatusHooks;

