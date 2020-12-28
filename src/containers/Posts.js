import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {asyncLoadPosts} from '../store/async-posts/asyncPostsSlice'
import Post from "../components/Post";
import PostForm from "../components/PostForm";

const Posts = () => {
    const posts = useSelector(state => state.posts.posts);
    const asyncPosts = useSelector(state => state.async.posts);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Это мои посты</h1>

            {posts.length ? (
                posts.map(item => (
                    <Post key={item.id} post={item}/>
                ))
            ) : (
                <div>Пока еще нет постов</div>
            )}

            <PostForm />

            <h1>Это асинхронные посты</h1>

            {asyncPosts.length ? (
                asyncPosts.map(item => (
                    <Post key={item.id} post={item}/>
                ))
            ) : (
                <button onClick={() => dispatch(asyncLoadPosts())}>Загрузить асинхронные посты</button>
            )}

        </div>
    );
};

export default Posts;
