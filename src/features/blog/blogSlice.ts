import {IBlogState} from './IBlogState';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchPosts} from './blogApi';
import {Status} from '../util/Status.enum';
import {FilterStatus} from './FilterStatus.enum';
import {stat} from 'fs';
import {IPostsParams} from './IPostParams';

const initialState: IBlogState = {
    currentPage: 1,
    pageCount: 9,
    posts: [],
    status: Status.IDLE,
    filterStatus: FilterStatus.DAY,
    search: ''
}


export const postsAsync = createAsyncThunk(
  'blog/loadPosts',
  async (params: IPostsParams, thunkAPI) => {
    try {
      const response = await fetchPosts(params);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        pageChange: (state: IBlogState, action) => {
            state.currentPage = action.payload;
        },
        setFilterStatus: (state: IBlogState, action) => {
            state.filterStatus = action.payload;
        },
        setSearch: (state: IBlogState, action) => {
            state.search = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postsAsync.pending, (state: IBlogState) => {
                state.status = Status.LOADING;
            })
            .addCase(postsAsync.fulfilled, (state: IBlogState, action) => {
                state.status = Status.IDLE;
                state.posts = action.payload;
            });
    }
});

export const { pageChange, setFilterStatus, setSearch } = blogSlice.actions;

export const selectPosts = (state: RootState) => state.blog.posts;
export const selectBlogStatus = (state: RootState) => state.blog.status;
export const selectCurrentPage = (state: RootState) => state.blog.currentPage;
export const selectPageCount = (state: RootState) => state.blog.pageCount;
export const selectFilterStatus = (state: RootState) => state.blog.filterStatus;
export const selectSearch = (state: RootState) => state.blog.search;

export default blogSlice.reducer;