function Header({ handleClose, title, children }) {
  return (
    <>
      <div className="dashboard-header">
        <h1 className="graph-title">{title}</h1>
        <button className="close-dashboard" onClick={handleClose}>
          X
        </button>
      {children}
      </div>
    </>
  );
}

export default Header;
