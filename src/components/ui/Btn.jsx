function Btn({ active, disabled, onClick, children }) {
  const classes =
    "MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-1e6y48t-MuiButtonBase-root-MuiButton-root";

  return (
    <button
      className={`${
        active ? "!text-white !bg-blue-500" : ""
      } ${classes} !border-[1px] !border-blue-500 !border-solid transition-colors`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Btn;
