import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {reduxForm, Field} from 'redux-form'
import { maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'post'} component={Textarea} validate={[maxLengthCreator(300)]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const MyPostReduxForm = reduxForm({
  form: 'post'
})(MyPostForm);

const MyPosts = React.memo(props => {
  const onSubmit = values => {
    props.addPost(values.post);
    values.post = '';
  };

  const postElement = [...props.posts]
                      .reverse()
                      .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
  return <div className={c.postBlock}>
        <h3>My Posts</h3>
        <MyPostReduxForm onSubmit={onSubmit} />
        <div className={c.posts}>
          {postElement}
        </div>
      </div>;
});

export default MyPosts;