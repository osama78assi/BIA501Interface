export async function solveShortestA(
  graph,
  hTable,
  allEdges,
  nodes,
  start,
  end
) {
  const dataToSend = { graph, hTable, nodes, allEdges, start, target: end };
  const req = await fetch(`${window.origin}/api/shortestPathA`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  if (!req.ok) throw new Error(req?.message || "Something Went Wrong");
  const { path: data } = await req.json();
  return data;
}

export async function solveShortestGen(
  graph,
  hTable,
  allEdges,
  nodes,
  start,
  end,
  gen,
  pop
) {
  const dataToSend = {
    graph,
    hTable,
    allEdges,
    nodes,
    generationsCount: gen,
    populationsCount: pop,
    start,
    target: end,
  };
  const req = await fetch(`${window.origin}/api/shortestPathGen`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  if (!req.ok) throw new Error(req?.message || "Something Went Wrong");
  const { path: data } = await req.json();
  return data;
}

export async function solveTSP(graph, allEdges, nodes, start, gen, pop) {
  const dataToSend = {
    graph,
    allEdges,
    nodes,
    start,
    generationsCount: gen,
    populationsCount: pop,
  };
  const req = await fetch(`${window.origin}/api/sovleTSP`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });

  if (!req.ok) throw new Error(req?.message || "Something Went Wrong");
  const { path: data } = await req.json();
  return data;
  // return ["A", "D", "B", "C"];
}
