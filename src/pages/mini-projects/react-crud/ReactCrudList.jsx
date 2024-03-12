import { FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { TimeAgo } from "../../../components/Components";
import { useEffect } from "react";

const ReactCrudList = ({ item, deleteData, editToggle, isEdit, editId, checkedId }) => {
  useEffect(() => {
    console.log(isEdit);
  }, []);
  let content;
  if (item) {
    content = (
      <div
        className={`flex border p-2 mb-1 rounded justify-between ${
          isEdit && editId == item.id ? "bg-green-100" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={item.checked} onChange={() => checkedId(item.id)} />
          <p className={`${item?.checked ? "line-through" : null}`}>
            {item?.title} update <TimeAgo time={item.updatedAt} />
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-red-500 p-2 rounded text-white hover:opacity-50" onClick={() => deleteData(item)}>
            <FaTrash />
          </button>
          <button onClick={() => editToggle(item)} className="bg-green-500 p-2 rounded text-white hover:opacity-50">
            {isEdit && editId === item.id ? <FaTimes /> : <FaEdit />}
          </button>
        </div>
      </div>
    );
  }
  return content;
};
ReactCrudList.propTypes;

export default ReactCrudList;
