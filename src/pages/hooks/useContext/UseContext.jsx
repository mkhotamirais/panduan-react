import { Breadcrumb, H1 } from "../../../components/Components";
import { UseContext1, UseContext2, UseContext3 } from "./UseContextBasic";

const UseContext = () => {
  return (
    <div>
      <H1>useContext</H1>
      <Breadcrumb />
      <UseContext1 />
      <UseContext2 />
      <UseContext3 />
    </div>
  );
};

export default UseContext;
