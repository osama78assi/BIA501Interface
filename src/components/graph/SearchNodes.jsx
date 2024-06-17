import { useSelector } from "react-redux";

// Resbonsible about searching for edges in the nodes list
function SearchNodes({ dis = false, setSearch, search }) {
  const  isSolving  = useSelector((state) => state.graph.isSolving);

  function sanitize(e) {
    if (/\w/.test(e.target.value[e.target.value.length - 1])) {
      setSearch(e.target.value);
    }
  }

  return (
    <div className="search-nodes">
      <label htmlFor="search-relations">Search for node</label>
      <input
        disabled={dis || isSolving}
        id="search-relations"
        type="text"
        name="search-relations"
        value={search}
        onChange={sanitize}
        placeholder="Search for nodes by name"
      />
    </div>
  );
}

export default SearchNodes;
