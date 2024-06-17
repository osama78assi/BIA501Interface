import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { solveDp, solveGenetic } from "../services/trucksAPI";

const initialState = {
  trucks: [],
  goods: [],
  solution: {},
  solutionWay: "dp",
  generationsCount: 50,
  populationsCount: 50,
  isSolving: false,
  ready: false,
  err: "",
};

export const solve = createAsyncThunk(
  "trucks/solve",
  async function (_, thunkAPI) {
    const {
      solutionWay: type,
      trucks,
      goods,
      generationsCount,
      populationsCount,
    } = thunkAPI.getState().trucks;

    let data;
    if (type == "dp") {
      // await new Promise((res) =>
      //   setTimeout(() => {
      //     res();
      //   }, 3000)
      // );

      data = await solveDp(trucks, goods);
    } else if (type == "genetic") {
      // await new Promise((res) =>
      //   setTimeout(() => {
      //     res();
      //   }, 3000)
      // );

      data = await solveGenetic(
        trucks,
        goods,
        generationsCount,
        populationsCount
      );
    }
    return data;
  }
);

const truckSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    addTruck(state, action) {
      state.trucks.push(action.payload);
    },
    deleteTruck(state, action) {
      state.trucks.splice(action.payload, 1);
    },
    updateTruckCapacity: {
      prepare(index, value) {
        return {
          payload: {
            index,
            value: +value > 1 ? +value : -value,
          },
        };
      },
      reducer(state, action) {
        state.trucks[action.payload.index].capacity = action.payload.value;
      },
    },
    updateTruckName: {
      prepare(index, value) {
        return {
          payload: {
            index,
            value,
          },
        };
      },
      reducer(state, action) {
        state.trucks[action.payload.index].name = action.payload.value;
      },
    },
    deleteAllTrucks(state) {
      state.trucks = [];
    },
    addGoods: {
      prepare(name, weight, quantity, index) {
        return {
          payload: {
            name,
            weight,
            quantity,
            index,
          },
        };
      },

      reducer(state, action) {
        state.goods.push([
          action.payload.name,
          action.payload.weight,
          action.payload.quantity,
          action.payload.index,
        ]);
      },
    },
    updateGoodsName: {
      prepare(index, newName) {
        return {
          payload: {
            index,
            name: newName,
          },
        };
      },
      reducer(state, action) {
        state.goods[action.payload.index][0] = action.payload.name;
      },
    },
    updateGoodsWeight: {
      prepare(index, newWeight) {
        return {
          payload: {
            index,
            weight: +newWeight > 1 ? +newWeight : -newWeight,
          },
        };
      },
      reducer(state, action) {
        state.goods[action.payload.index][1] = action.payload.weight;
      },
    },
    updateGoodsQuantity: {
      prepare(index, newQuantity) {
        return {
          payload: {
            index,
            quantity: +newQuantity > 1 ? +newQuantity : -newQuantity,
          },
        };
      },
      reducer(state, action) {
        state.goods[action.payload.index][2] = action.payload.quantity;
      },
    },
    deleteGoods(state, action) {
      state.goods.splice(action.payload, 1);
      state.goods.forEach((ele, index) => {
        ele[3] = index;
      });
    },
    deleteAllGoods(state) {
      state.goods = [];
    },
    manipulateReady(state, action) {
      state.ready = action.payload;
    },
    setSolutionWay(state, action) {
      state.solutionWay = action.payload;
    },
    setIsSolving(state, action) {
      state.isSolving = action.payload;
    },
    deleteSolution(state) {
      state.solution = {};
    },
    setPopulationsCount(state, action) {
      state.populationsCount = action.payload;
    },
    setGenerationsCount(state, action) {
      state.generationsCount = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(solve.pending, function (state) {
        state.isSolving = true;
        const solution = state.solution;
        if (state.err != "") state.err = "";
        if (solution?.goods) {
          // cleare the old solution
          state.solution = {};
        }
      })
      .addCase(solve.fulfilled, function (state, action) {
        state.isSolving = false;
        if(action.payload instanceof Error) {
          state.err = action.payload.message;
          return;
        }
        state.solution = action.payload;
      })
      .addCase(solve.rejected, function (state, action) {
        state.isSolving = false;
        state.err = action.error.message;
      });
  },
});

export default truckSlice.reducer;

export const {
  addTruck,
  deleteTruck,
  updateTruckCapacity,
  updateTruckName,
  deleteAllTrucks,
  addGoods,
  updateGoodsName,
  updateGoodsWeight,
  updateGoodsQuantity,
  deleteGoods,
  deleteAllGoods,
  manipulateReady,
  setSolutionWay,
  setIsSolving,
  setPopulationsCount,
  setGenerationsCount,
} = truckSlice.actions;
