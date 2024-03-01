import { createSlice } from "@reduxjs/toolkit";
import { Shows } from "../types";
import { fetchShow, fetchShowId } from "./showsThunks";

interface ShowsState {
    shows: Shows[];
    fetchLoading: boolean;
};

const initialState: ShowsState = {
    shows: [],
    fetchLoading: false,
};

const showsSlice = createSlice({
    name: 'shows',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchShow.pending, (state) => {
            state.fetchLoading = true;
        }).addCase(fetchShow.fulfilled, (state, action) => {
            state.shows = action.payload
            state.fetchLoading = false
        }).addCase(fetchShow.rejected, (state) => {
            state.fetchLoading = false
        });

        builder.addCase(fetchShowId.pending, (state) => {
            state.fetchLoading = true;
        }).addCase(fetchShowId.fulfilled, (state, action) => {
            state.shows = [action.payload];
            state.fetchLoading = false;
        }).addCase(fetchShowId.rejected, (state) => {
            state.fetchLoading = false;
        });
    }
});

export const showsReducer = showsSlice.reducer;