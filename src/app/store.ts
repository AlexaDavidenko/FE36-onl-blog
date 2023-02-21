import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from '../features/theme-switcher/themeSlice';
import blogReducer from '../features/blog/blogSlice';
import postReducer from '../features/post/postSlice';
import postsSimilarReducer from '../features/posts-similar/postsSimilarSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        blog: blogReducer,
        post: postReducer,
        postsSimilar: postsSimilarReducer,
        user: userReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
