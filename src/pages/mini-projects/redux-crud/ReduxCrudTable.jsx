import { useState } from "react";
import { Actions } from "../../../components/Components";
import ReduxCrudModalDelete from "./ReduxCrudModalDelete";
import ReduxCrudModalView from "./ReduxCrudModalView";
import TimeAgo from "./TimeAgo";

const ReduxCrudTable = ({ item, i }) => {
  const [showModalDelete, setShowModalDelete] = useState(null);
  const [showModalView, setShowModalView] = useState(null);

  const onClose = () => {
    if (showModalDelete) setShowModalDelete(false);
    if (showModalView) setShowModalView(false);
  };

  return (
    <tr>
      <td>{i + 1}</td>
      <td>{item.name}</td>
      <td className="hidden sm:table-cell">{item.price}</td>
      <td className="hidden md:table-cell">{item.description}</td>
      <td className="hidden lg:table-cell">
        <TimeAgo time={item.createdAt} />
      </td>
      <td className="hidden xl:table-cell">
        <TimeAgo time={item.updatedAt} />
      </td>
      <td>
        <Actions modalDelete={() => setShowModalDelete(item.id)} modalView={() => setShowModalView(item.id)} id={item.id} />
        {showModalDelete === item.id && <ReduxCrudModalDelete onClose={onClose} item={item} />}
        {showModalView === item.id && <ReduxCrudModalView onClose={onClose} item={item} />}
      </td>
    </tr>
  );
};
ReduxCrudTable.propTypes;

export default ReduxCrudTable;
