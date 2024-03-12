import { Breadcrumb, GridCard, H1, PostBtn } from "../../../components/Components";
import { useSelector } from "react-redux";
import ReduxCrudCard from "./ReduxCrudCard";
import { FaMessage } from "react-icons/fa6";
import Modal from "../../../components/Modal";
import { useState } from "react";

const ReduxCrud = () => {
  const data = useSelector((state) => state.reduxCrud);
  const [showModalPr, setShowModalPr] = useState(false);
  const onClose = () => {
    setShowModalPr(false);
  };
  // useEffect(() => {
  //   console.log(data);
  // }, []);
  let content;
  if (data) {
    const renderedData = data && data.map((item) => <ReduxCrudCard key={item.id} item={item} />);
    content = <GridCard>{renderedData}</GridCard>;
  }
  return (
    <div>
      <div className="flex justify-between">
        <H1>redux crud</H1>
        <button onClick={() => setShowModalPr(true)} className="text-yellow-500 hover:opacity-70">
          <FaMessage />
        </button>
        {showModalPr && <ModalPr onClose={onClose} />}
      </div>
      <Breadcrumb />
      <PostBtn />
      <div>{content}</div>
    </div>
  );
};

export default ReduxCrud;

const ModalPr = ({ onClose }) => <Modal onClose={onClose}>Belum ada fitur (filter, search, sort)</Modal>;
ModalPr.propTypes;
