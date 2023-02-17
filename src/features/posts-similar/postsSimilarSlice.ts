import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Status} from '../util/Status.enum';
import {RootState} from '../../app/store';
import {loadPostsSimilar} from './postsSimilarApi';
import {IPost} from '../post/IPost';

interface IPostsSimilarState {
    posts: IPost[];
    status: Status;
}
const initialState: IPostsSimilarState = {
    posts: [],
    status: Status.IDLE
}

export const postsSimilarAsync = createAsyncThunk(
  'postsSimilar/loadPosts',
  async (count: number, thunkAPI) => {
    try {
      const response = await loadPostsSimilar(count);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const postsSimilarSlice = createSlice({
    name: 'postsSimilar',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(postsSimilarAsync.pending, (state: IPostsSimilarState) => {
                state.status = Status.LOADING;
            })
            .addCase(postsSimilarAsync.fulfilled, (state: IPostsSimilarState, action) => {
                state.status = Status.IDLE;
                state.posts = action.payload;
            })
        ;
    }
});

export const selectPostsSimilar = (state: RootState) => state.postsSimilar.posts;
export const selectPostsSimilarStatus = (state: RootState) => state.postsSimilar.status;

export default postsSimilarSlice.reducer;