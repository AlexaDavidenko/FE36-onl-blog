import {IPost} from './IPost';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loadPost} from './postApi';
import {Status} from '../util/Status.enum';
import {RootState} from '../../app/store';

interface IPostState {
    post: IPost;
    status: Status;
}
const initialState: IPostState = {
    post: {} as IPost,
    status: Status.IDLE
}

export const postAsync = createAsyncThunk(
  'post/loadPost',
  async (id: string, thunkAPI) => {
    try {
      const response = await loadPost(id);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(postAsync.rejected, (state: IPostState) => {
                state.status = Status.FAILED;
            })
            .addCase(postAsync.pending, (state: IPostState) => {
                state.status = Status.LOADING;
            })
            .addCase(postAsync.fulfilled, (state: IPostState, action) => {
                state.status = Status.IDLE;
                state.post = action.payload;
            })
        ;
    }
});

export const selectPost = (state: RootState) => state.post.post;
export const selectPostStatus = (state: RootState) => state.post.status;

export default postSlice.reducer;