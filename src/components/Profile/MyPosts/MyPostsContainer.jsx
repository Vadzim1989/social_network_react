import MyPosts from "./MyPosts";
import { addPostActCreater,  } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, {
  // updateNewPostText: updateNewPostTextActCreater,
  addPost: addPostActCreater
})(MyPosts);

export default MyPostsContainer;