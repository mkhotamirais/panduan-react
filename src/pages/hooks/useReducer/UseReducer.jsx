import { Breadcrumb, H1 } from "../../../components/Components";
import { UseReducer1, UseReducer2 } from "./UseReducerBasic";

const UseReducer = () => {
  return (
    <div>
      <H1>UseReducer</H1>
      <Breadcrumb />
      <UseReducer1 />
      <UseReducer2 />
    </div>
  );
};

export default UseReducer;
