import { useDispatch } from "react-redux";
import Modal from "../../../components/Modal";
import { Button } from "../../../components/Tags";
import { deleteProduct } from "../../../app/features/reduxCrud/reduxCrudSlice";
import { useSnackbar } from "notistack";

const ReduxCrudModalDelete = ({ onClose, item }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteProduct(id));
    enqueueSnackbar("Delete data berhasil", { variant: "success" });
  };
  return (
    <Modal onClose={onClose} id={item.id}>
      <div className="flex flex-col items-start gap-5">
        <div>Apakah kamu yakin?</div>
        <div className="flex gap-1">
          <form onSubmit={(e) => onDelete(e, item.id)} className="relative">
            <input type="checkbox" autoFocus className="absolute opacity-0" />
            <Button type="submit" className={"bg-red-500 w-auto"}>
              Delete
            </Button>
          </form>
          <Button onClick={onClose} className={"w-auto"}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};
ReduxCrudModalDelete.propTypes;

export default ReduxCrudModalDelete;
