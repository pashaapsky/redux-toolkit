import {createSlice} from "@reduxjs/toolkit";

const asyncPostsSlice = createSlice({
    name: "async",
    initialState: {
        posts: []
    },
    reducers: {
        loadPosts: (state, action) => {
            state.posts = [...state.posts, ...action.payload]
        }
    }
});

export const {loadPosts} = asyncPostsSlice.actions;


export const asyncLoadPosts = () => async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await response.json();

    dispatch(loadPosts(posts));
};

export default asyncPostsSlice.reducer;