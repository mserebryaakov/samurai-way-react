import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, changeEditMode] = useState(false);
    let [status, changeStatusInHook] = useState(props.status);

    useEffect( () => {
        changeStatusInHook(props.status)
    }, [props.status])

    let activateEditStatus = () => {
        changeEditMode(true);
    }

    let deactivateEditStatus = () => {
        changeEditMode(false);
        props.onChangeStatus(status);
    }

    let changeStatus = (e) => {
        changeStatusInHook(e.currentTarget.value);
    }

    return (
        <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditStatus}>Статус: {status || "Нет статуса"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={changeStatus} autoFocus={true} onBlur={deactivateEditStatus} value={status} />
                    </div>
                }
            </div>
    );
}

export default ProfileStatusWithHooks;