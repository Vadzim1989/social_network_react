import { requiredField } from '../../../utils/validators/validators'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import {reduxForm} from 'redux-form'
import style from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataFormInput = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField('About me...', 'aboutMe', [], Textarea)} 
        {createField('Full name', 'fullName', [requiredField], Input)} 
        {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'}, 'Are you looking a job?')}   
        {createField("Your professional skills...", 'lookingForAJobDescription', [], Textarea)}              
        <div>
            Contacts:
                {Object.keys(profile.contacts).map(key => {
                      return createField(`${key}`, `contacts.${key}`, null, Input)
                })}
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <button >save</button>
        </div>     
    </form>
}

const ProfileDataReduxForm = reduxForm({
    form: 'profileData',
    destroyOnUnmount: false
})(ProfileDataFormInput)

const ProfileDataForm = ({profile, saveProfile, setEditMode}) => {
    const onSubmit = (data) => {
        saveProfile(data).then(() => {
            setEditMode(false);
        })               
    }
    return <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
}


export default ProfileDataForm;