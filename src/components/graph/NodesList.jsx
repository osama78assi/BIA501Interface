import { memo, useState } from "react";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import GraphError from "./GraphError";
import Relation from "./Relation";
import SearchNodes from "./SearchNodes";

// This part responsible of taking nodes and etc...
const NodesList = memo(function NodesList({ elementsCount }) {
  const [searchInput, setSearchInput] = useState("");
  const abslouteEdges = useSelector((state) => state.graph.abslouteEdges);
  let filteredRelations =
    searchInput != ""
      ? abslouteEdges.filter((relation) =>
          relation.startsWith(searchInput) ? relation : ""
        )
      : [];

  // Graph never existed yet
  if (!abslouteEdges.length) {
    return (
      <div className="weights" data-count={elementsCount}>
        <SearchNodes
          search={searchInput}
          setSearch={setSearchInput}
          dis={true}
        />
        <Empty>No edges yet</Empty>
      </div>
    );
  }

  // No search with graph existed
  if (searchInput == "" && abslouteEdges.length) {
    return (
      <div className="weights" data-count={elementsCount}>
        <SearchNodes search={searchInput} setSearch={setSearchInput} />
        {abslouteEdges.map((relation) => (
          <Relation key={relation} details={relation} />
        ))}
      </div>
    );
  }

  // Search with results
  if (searchInput != "" && filteredRelations.length) {
    return (
      <div className="weights" data-count={elementsCount}>
        <SearchNodes search={searchInput} setSearch={setSearchInput} />
        {filteredRelations.map((relation) => (
          <Relation key={relation} details={relation} />
        ))}
      </div>
    );
  }

  // Last one can include in if statment if there is more states...
  // Last state is search found but there is no results
  return (
    <div className="weights" data-count={elementsCount}>
      <SearchNodes search={searchInput} setSearch={setSearchInput} />
      {searchInput != "" && filteredRelations.length == 0 && (
        <GraphError additionalStyle={{ width: "80%", margin: "1rem auto 0" }}>
          There is no node starts with {searchInput}
        </GraphError>
      )}
    </div>
  );
});

export default NodesList;
