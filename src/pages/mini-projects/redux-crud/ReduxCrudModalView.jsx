import Modal from "../../../components/Modal";
import TimeAgo from "./TimeAgo";

const ReduxCrudModalView = ({ onClose, item }) => {
  return (
    <Modal onClose={onClose} id={item.id}>
      <div className="flex flex-col items-start gap-2">
        <div>Name : {item.name}</div>
        <div>Price : {item.price}</div>
        <div>Desciription : {item.description}</div>
        <div className="text-sm">
          Created <TimeAgo time={item.createdAt} />
          <br />
          Updated <TimeAgo time={item.updatedAt} />
        </div>
      </div>
    </Modal>
  );
};
ReduxCrudModalView.propTypes;

export default ReduxCrudModalView;
