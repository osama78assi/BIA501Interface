import { useSelector } from "react-redux";

function Slide({
  stage,
  satisfyClass,
  unSatisfayClass,
  additionalClassess,
  children,
}) {
  const curStage = useSelector((state) => state.form.stage)
  const classN = `${
    curStage == stage ? satisfyClass : unSatisfayClass
  } ${additionalClassess}`;
  return <div className={classN}>{children}</div>;
}

export default Slide;
