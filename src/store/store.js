import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './posts/postsSlice'
import asyncPostsReducer from './async-posts/asyncPostsSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        async: asyncPostsReducer
    }
});

export default store;
