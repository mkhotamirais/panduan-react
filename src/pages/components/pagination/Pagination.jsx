import { Breadcrumb, H1 } from "../../../components/Components";
import Pag1 from "./Pag1";
import Pag2 from "./Pag2";

const Pagination = () => {
  return (
    <section>
      <div>
        <H1>pagination</H1>
        <Breadcrumb />
      </div>{" "}
      <Pag1 />
      <Pag2 />
    </section>
  );
};

export default Pagination;
