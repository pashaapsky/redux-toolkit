import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addPost} from '../store/posts/postsSlice';

const PostForm = () => {
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newPost = {
            id: Number(new Date()),
            title,
            body,
            userId: 5
        };

        dispatch(addPost(newPost));
        setBody('');
        setTitle('');
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="title" value={title} placeholder="Введите title"
                   onChange={event => setTitle(event.target.value)}
            />

            <input type="text" name="body" value={body} placeholder="Введите body"
                   onChange={event => setBody(event.target.value)}
            />

            <button type="submit">Добавить пост</button>
        </form>
    );
};

export default PostForm;
