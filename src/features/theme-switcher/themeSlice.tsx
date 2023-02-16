import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Theme} from './Theme.enum';
import {ThemeSlice} from './IThemeSlice';

const initialState: ThemeSlice = {
  theme: Theme.LIGHT
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        }
    }
});

export const {toggleTheme} = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer;