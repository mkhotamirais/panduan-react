import { Breadcrumb, GridCard, H1, PostBtn } from "../../../components/Components";
import { useDispatch, useSelector } from "react-redux";
import ReduxCrudCard from "./ReduxCrudCard";
import { FaMessage } from "react-icons/fa6";
import Modal from "../../../components/Modal";
import { useEffect, useState } from "react";
import ReduxCrudTable from "./ReduxCrudTable";
import { setSort } from "../../../app/features/reduxCrud/reduxCrudA2Slice";

const ReduxCrud = () => {
  const data = useSelector((state) => state.reduxCrud);
  const [showModalPr, setShowModalPr] = useState(false);
  const [view, setView] = useState("table");
  const { sort } = useSelector((state) => state.reduxCrud2);

  const dispatch = useDispatch();

  let sortedData;
  if (sort === "asc") sortedData = data.slice().sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  else if (sort === "desc") sortedData = data.slice().sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0));
  else if (sort === "createdAt") sortedData = data.slice().sort((a, b) => b?.createdAt?.localeCompare(a.createdAt));
  else if (sort === "updatedAt") sortedData = data.slice().sort((a, b) => b?.updatedAt?.localeCompare(a.updatedAt));

  useEffect(() => {
    setView(JSON.parse(localStorage.getItem("reduxCrudView")));
    console.log(data.length);
  }, []);

  const onClose = () => {
    setShowModalPr(false);
  };

  let content;
  if (data?.length > 0) {
    const renderedDataCard = data && sortedData.map((item) => <ReduxCrudCard key={item.id} item={item} />);
    const renderedDataTable = data && sortedData.map((item, i) => <ReduxCrudTable key={item.id} item={item} i={i} />);
    if (view === "card") {
      content = <GridCard>{renderedDataCard}</GridCard>;
    } else if (view === "table") {
      content = (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th className="hidden sm:table-cell">Price</th>
              <th className="hidden md:table-cell">Description</th>
              <th className="hidden lg:table-cell">CreatedAt</th>
              <th className="hidden xl:table-cell">UpdatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderedDataTable}</tbody>
        </table>
      );
    }
  } else if (data.length == 0) content = <div className="text-center italic mt-5">Data empty</div>;
  return (
    <section id="reduxCrud">
      <div className="flex justify-between">
        <H1>redux crud</H1>
        <button onClick={() => setShowModalPr(true)} className="text-yellow-500 hover:opacity-70">
          <FaMessage />
        </button>
        {showModalPr && <ModalPr onClose={onClose} />}
      </div>
      <Breadcrumb />
      <div className="flex justify-between">
        <PostBtn />
        <div className="flex gap-1 items-center">
          <select
            name="view"
            id="view"
            onChange={(e) => {
              setView(e.target.value);
              localStorage.setItem("reduxCrudView", JSON.stringify(e.target.value));
            }}
            className="border border-blue-400 p-1 rounded"
          >
            <option value="table" defaultValue={view === "table"}>
              Table View
            </option>
            <option value="card" defaultValue={view === "card"}>
              Card View
            </option>
          </select>
          <select
            name="sort"
            id="sort"
            onChange={(e) => dispatch(setSort(e.target.value))}
            className="border border-blue-400 p-1 rounded"
          >
            <option value="updatedAt">Sort</option>
            <option value="asc">From a to z</option>
            <option value="desc">From z to a</option>
            <option value="createdAt">Created time</option>
            <option value="updatedAt">Updated time</option>
          </select>
        </div>
      </div>
      <div>{content}</div>
    </section>
  );
};

export default ReduxCrud;

const ModalPr = ({ onClose }) => <Modal onClose={onClose}>Belum ada fitur (filter, search, sort)</Modal>;
ModalPr.propTypes;
