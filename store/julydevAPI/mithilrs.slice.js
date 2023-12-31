import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_mithilrs_list = createAsyncThunk("mithilrs/api_v1_mithilrs_list", async payload => {
  const response = await apiService.api_v1_mithilrs_list(payload);
  return response.data;
});
export const api_v1_mithilrs_create = createAsyncThunk("mithilrs/api_v1_mithilrs_create", async payload => {
  const response = await apiService.api_v1_mithilrs_create(payload);
  return response.data;
});
export const api_v1_mithilrs_retrieve = createAsyncThunk("mithilrs/api_v1_mithilrs_retrieve", async payload => {
  const response = await apiService.api_v1_mithilrs_retrieve(payload);
  return response.data;
});
export const api_v1_mithilrs_update = createAsyncThunk("mithilrs/api_v1_mithilrs_update", async payload => {
  const response = await apiService.api_v1_mithilrs_update(payload);
  return response.data;
});
export const api_v1_mithilrs_partial_update = createAsyncThunk("mithilrs/api_v1_mithilrs_partial_update", async payload => {
  const response = await apiService.api_v1_mithilrs_partial_update(payload);
  return response.data;
});
export const api_v1_mithilrs_destroy = createAsyncThunk("mithilrs/api_v1_mithilrs_destroy", async payload => {
  const response = await apiService.api_v1_mithilrs_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const mithilrsSlice = createSlice({
  name: "mithilrs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_mithilrs_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_mithilrs_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_mithilrs_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_mithilrs_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_mithilrs_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_mithilrs_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_mithilrs_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_mithilrs_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_mithilrs_list,
  api_v1_mithilrs_create,
  api_v1_mithilrs_retrieve,
  api_v1_mithilrs_update,
  api_v1_mithilrs_partial_update,
  api_v1_mithilrs_destroy,
  slice: mithilrsSlice
};