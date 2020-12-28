import React from 'react';
import {useDispatch} from "react-redux";
import {deletePost} from '../store/posts/postsSlice';


const Post = ({post}) => {
    const dispatch = useDispatch();

    return (
        <div style={{border: "1px solid black", padding: "15px", width: "80px"}}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>{post.userId}</p>

            <button onClick={() => dispatch(deletePost(post.id))}>X</button>
        </div>
    );
};

export default Post;
