import { useContext } from "react";
import { CatContext } from "../HooksLab/HooksLab";

const Cats = () => {
  const cats = useContext(CatContext);
  console.log(cats)

  return <div>{cats.tekir}</div>;
};

export default Cats;
