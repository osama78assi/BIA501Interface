function BtnsContainer({ children }) {
  return (
    <div className="p-2 flex gap-3 border-blue-500 border-[1px] rounded-md w-fit mx-auto">
      {children}
    </div>
  );
}

export default BtnsContainer;
