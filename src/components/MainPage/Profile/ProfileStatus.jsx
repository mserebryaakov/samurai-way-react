import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditStatus() {
        this.setState({
            editMode: true 
        })
    }

    deactivateEditStatus() {
        this.setState({
            editMode: false 
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditStatus.bind(this)}>Статус: {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditStatus.bind(this)} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;