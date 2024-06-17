export async function solveDp(trucks, goods) {
  const dataToSend = {
    trucks,
    goods,
  };
  // on production `${window.origin}/api/solveTrucksDp` or in development use the host givin in django backend
  const req = await fetch(`${window.origin}/api/solveTrucksDp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  if (!req.ok) throw new Error(req?.message || "Something went wrong");

  const { data } = await req.json();
  return data;
}

export async function solveGenetic(trucks, goods, gen, pop) {
  const dataToSend = {
    trucks,
    goods,
    generationsCount: gen,
    populationsCount: pop,
  };
  try {
    const req = await fetch(`${window.origin}/api/solveTrucksGen`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    if (!req.ok) throw new Error(req?.message || "Something went wrong");
    const { data } = await req.json();
    return data;
  } catch (err) {
    return err;
  }
}
