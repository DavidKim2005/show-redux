import { createAsyncThunk } from "@reduxjs/toolkit";
import { Show } from "../types";

export const fetchShow = createAsyncThunk<Show[]>(
    'shows/fetchShow',
    async (showItem) => {
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${showItem}`);
        const data = await response.json();
        return data;
    }
);

export const fetchShowId = createAsyncThunk<Show>(
    'shows/fetchShowId',
    async (showId) => {
        const response = await fetch(`http://api.tvmaze.com/shows/${showId}`);
        const data = await response.json();
        return data;
    }
);