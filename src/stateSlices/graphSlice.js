import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  solveShortestA,
  solveShortestGen,
  solveTSP,
} from "../services/graphAPI";
import {
  calcH,
  distributeEdges,
  distributeNodes,
  isSameAsReverse,
} from "../util/helperGraph";

const initialState = {
  graph: {},
  path: [],
  problem: "shortestPath",
  solveWay: "A*",
  isSolving: false,
  error: "",
  abslouteEdges: [],
  filter: "graph",
  showDashboard: false,
  showSolve: false,
  points: [],
  nodesCoordinate: {},
  nodesStyle: [],
  nodeSize: 50,
  lengthForSide: 100,
  edges: [],
  nodes: [],
  nodeLen: 0,
  maxEdges: 0,
  curSnapshot: 0,
  allEdges: {},
  populationsCount: 50,
  generationsCount: 50,
  responseErr: "", // this comes from API calls
};

export const solve = createAsyncThunk(
  "graph/solve",
  async function ({ start, end }, thunkAPI) {
    const {
      solveWay,
      nodes,
      problem,
      graph,
      generationsCount,
      populationsCount,
      allEdges
    } = thunkAPI.getState().graph;
    let data;

    // await new Promise((res) =>
    //   setTimeout(() => {
    //     res();
    //   }, 3000)
    // );
    if (problem == "shortestPath") {
      const hTable = calcH(graph, end);
      if (solveWay == "A*") {
        data = await solveShortestA(graph, hTable, allEdges, nodes, start, end);
      } else if (solveWay == "genetic") {
        data = await solveShortestGen(
          graph,
          hTable,
          allEdges,
          nodes,
          start,
          end,
          generationsCount,
          populationsCount
        );
      }
    } else if (problem == "TSP") {
      data = await solveTSP(graph, allEdges, nodes, start, generationsCount, populationsCount);
    }
    return data;
  }
);

const graph = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setGraph(state, action) {
      // Prepare Nodes
      const nodes = Object.keys(action.payload);
      const nodesLen = nodes.length;
      const radius = (nodesLen * 100) / 4; // distance between center and points(Nodes)
      const points = distributeNodes(
        radius,
        state.lengthForSide * nodesLen,
        nodesLen
      );
      const nodesCoordinate = {}; // For edges
      const nodesStyle = nodes.map(function (node, index) {
        const styling = {
          left: `${points[index].x}px`,
          top: `${points[index].y}px`,
        };
        nodesCoordinate[node] = points[index];
        return { styling, node };
      });
      // Prepare Edges (this will paint on the screen)
      const { edges, presented } = distributeEdges(
        action.payload,
        nodesCoordinate
      );
      const abslouteEdges = []; // A->B just with no B->A it will help on render them
      const keys = Object.keys(presented); // Filter one way

      keys.reduce(function (acc, curr) {
        if (isSameAsReverse(acc, curr)) {
          abslouteEdges.push(acc);
        }
        return curr;
      }, keys[0]);

      // Set all states in one go
      state.graph = action.payload;
      state.nodes = nodes;
      state.allEdges = presented;
      state.edges = edges;
      state.abslouteEdges = abslouteEdges;
      state.nodesCoordinate = nodesCoordinate;
      state.nodesStyle = nodesStyle;
      state.points = points;
    },
    setPath(state, action) {
      // soon will be async thunk
      state.path = action.payload;
    },
    setErr(state, action) {
      state.error = action.payload;
    },
    setIsSolving(state, action) {
      state.isSolving = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setCurSnapshot(state, action) {
      state.curSnapshot = action.payload;
    },
    setShowSolve(state, action) {
      state.showSolve = action.payload;
    },
    setShowDashboard(state, action) {
      state.showDashboard = action.payload;
    },
    setSolveWay(state, action) {
      state.solveWay = action.payload;
    },
    setProblem(state, action) {
      state.problem = action.payload;
    },
    setPopulations(state, action) {
      state.populationsCount = action.payload;
    },
    setGenerationsCount(state, action) {
      state.generationsCount = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(solve.pending, function (state) {
        if (state.responseErr != "") state.responseErr = "";
        state.isSolving = true;
        state.path = [];
      })
      .addCase(solve.fulfilled, function (state, action) {
        if (action.payload instanceof Error) {
          state.responseErr = action.payload.message;
          return;
        }
        state.isSolving = false;
        state.path = action.payload;
      })
      .addCase(solve.rejected, function (state, action) {
        state.isSolving = false;
        state.responseErr = action.error.message;
      });
  },
});

export default graph.reducer;

export const {
  updateName,
  setGraph,
  setPath,
  setErr,
  setIsSolving,
  setFilter,
  setCurSnapshot,
  setShowSolve,
  setShowDashboard,
  setProblem,
  setSolveWay,
  setPopulations,
  setGenerationsCount,
} = graph.actions;
