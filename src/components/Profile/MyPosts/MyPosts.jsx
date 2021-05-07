import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    let postElements = props.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let AddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={AddPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
})

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'Add new post'}
                validate={[required, maxLength10]}/>
            </div>
            <button>add post</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm ({form: "addPostForm"})(AddPostForm)
export default MyPosts;

