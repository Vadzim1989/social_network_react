import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) { //if previous props changed, we updating component
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.setStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return(
            <div>
                {
                    !this.state.editMode 
                    ?  <div><span onDoubleClick={this.activateEditMode}>{this.state.status}</span></div>
                    :  <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/></div>
                }                
            </div>
        )
    }    
}

export default ProfileStatus;