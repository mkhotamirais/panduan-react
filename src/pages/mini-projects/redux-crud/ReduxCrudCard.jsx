import { useState } from "react";
import { Actions } from "../../../components/Components";
import TimeAgo from "./TimeAgo";
import ReduxCrudModalDelete from "./ReduxCrudModalDelete";
import ReduxCrudModalView from "./ReduxCrudModalView";

const ReduxCrudCard = ({ item }) => {
  const [showModalDelete, setShowModalDelete] = useState(null);
  const [showModalView, setShowModalView] = useState(null);

  const onClose = () => {
    if (showModalDelete) setShowModalDelete(false);
    if (showModalView) setShowModalView(false);
  };

  return (
    <div className="border p-3 rounded text-gray-700 flex flex-col gap-2">
      <div className="text-xs text-gray-500">ID:{item?.id}</div>
      <div>
        <div className="capitalize text-lg font-medium">{item?.name}</div>
        <div>Rp{item?.price.toLocaleString("id-ID")}</div>
      </div>
      <div>{item?.description}</div>
      <div className="text-sm">
        <div>
          Created at: <TimeAgo time={item?.createdAt} />
        </div>
        <div>
          Updated at: <TimeAgo time={item?.updatedAt} />
        </div>
      </div>
      <Actions modalDelete={() => setShowModalDelete(item.id)} modalView={() => setShowModalView(item.id)} id={item.id} />
      {showModalDelete === item.id && <ReduxCrudModalDelete onClose={onClose} item={item} />}
      {showModalView === item.id && <ReduxCrudModalView onClose={onClose} item={item} />}
    </div>
  );
};
ReduxCrudCard.propTypes;

export default ReduxCrudCard;
