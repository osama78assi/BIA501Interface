import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const nav = useNavigate();

  return (
    <div className="flex h-full w-full justify-center content-center">
      <p className="border-red-400 border-2 h-[fit-content] py-3 px-2 rounded-lg my-6 w-[80%] mx-auto">
        The Page You Are Requsting For Isn&apos;t Exist{" "}
        <span
          className="underline text-blue-500 cursor-pointer"
          onClick={() => nav(-1, { replace: true })}
        >
          Back
        </span>
      </p>
    </div>
  );
}

export default PageNotFound;
