import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditStatus = () => {
        this.setState({
            editMode: true 
        })
    }

    deactivateEditStatus = () => {
        this.setState({
            editMode: false
        })
        this.props.onChangeStatus(this.state.status)
    }

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditStatus}>Статус: {this.state.status || "Нет статуса"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.changeStatus} autoFocus={true} onBlur={this.deactivateEditStatus} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;