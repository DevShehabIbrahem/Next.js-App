import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

type MoveisType = {
  status: "loading" | "idle";
  Movies: any;
};

const initialState = {
  Movies: {},

  status: "idle",
} as MoveisType;

const MoviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    FetchMoviesDetails: (state, { payload }) => {
      state.Movies = payload;
    },
  },
});

export const selectState = (state: AppState) => state.movies.Movies;
export const { FetchMoviesDetails } = MoviesSlice.actions;

export default MoviesSlice.reducer;
