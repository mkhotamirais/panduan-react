import { useEffect, useState } from "react";
import { Breadcrumb, H1 } from "../../../components/Components";
import ReactCrudList from "./ReactCrudList";
import ReactCrudCreateOrUpdate from "./ReactCrudCreateOrUpdate";

const ReactCrud = () => {
  const [data, setData] = useState([
    // { id: 1, title: "konten1", date: "2024-2-20", checked: false },
    // { id: 2, title: "konten2", date: "2024-2-17", checked: false },
    // { id: 3, title: "konten3", date: "2024-2-18", checked: false },
  ]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("reactCrudData")) || []);
  }, []);
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState(null);
  const [checkedAll, setCheckedAll] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [titleEdit, setTitleEdit] = useState(title && title);

  const checkedLength = data.filter((d) => d.checked).length;
  useEffect(() => {
    if (checkedLength !== data.length) setCheckedAll(false);
    else setCheckedAll(true);
  }, [checkedLength, data]);

  const setResult = (result) => {
    setData(result);
    localStorage.setItem("reactCrudData", JSON.stringify(result));
  };

  const submitData = (e) => {
    e.preventDefault();
    if (title) {
      const id = data.reduce((acc, d) => (acc = acc > d.id ? acc : d.id), 0);
      const createdAt = new Date().toISOString();
      const updatedAt = new Date().toISOString();
      const result = [...data, { id: id + 1, title, checked: false, createdAt, updatedAt }];
      setResult(result);
      setTitle("");
      setMsg(`create ${title} berhasil`);
    } else setMsg("data harus diisi");
  };

  const deleteData = (item) => {
    setMsg("");
    const result = data.filter((d) => d.id !== item.id);
    setMsg(`Delete data id ${item.id} success`);
    setResult(result);
  };

  const onChangeAdd = (e) => setTitle(e.target.value);
  const onChangeUpdate = (e) => setTitleEdit(e.target.value);

  const editToggle = (item) => {
    setIsEdit(!isEdit);
    setEditId(item.id);
    setTitleEdit(item.title);
  };

  const onEdit = (e) => {
    e.preventDefault();
    const otherData = data.filter((d) => d.id !== editId);
    const match = data.find((d) => d.id === editId);
    match.title = titleEdit;
    match.updatedAt = new Date().toISOString();
    const result = [...otherData, match];
    setResult(result);
    setIsEdit(false);
    setMsg(`Update data id ${editId} success`);
  };

  const checkedId = (id) => {
    setMsg("");
    const result = data.map((d) => (d.id === id ? { ...d, checked: !d.checked } : d));
    setResult(result);
  };

  const deleteAllChecked = () => {
    const result = data.filter((d) => !d.checked);
    if (result.length === 0) setMsg(`Success delete all data, total deleted ${data.length} data`);
    else setMsg(`Success deleted ${data.length - result.length} data`);
    setResult(result);
  };

  const checkedAllData = () => {
    setMsg("");
    setCheckedAll((prev) => !prev);
    const result = data.map((d) => (checkedAll ? { ...d, checked: false } : { ...d, checked: true }));
    setResult(result);
  };

  let content;
  if (data.length > 0) {
    content = data
      // .sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0))
      .sort((a, b) => b?.updatedAt?.localeCompare(a?.updatedAt))
      .map((item) => (
        <ReactCrudList
          key={item.id}
          item={item}
          deleteData={deleteData}
          editToggle={editToggle}
          isEdit={isEdit}
          editId={editId}
          checkedId={checkedId}
        />
      ));
  } else content = <p className="italic text-center">no data</p>;

  return (
    <div>
      <H1>react crud</H1>
      <Breadcrumb />
      <div>project ini dibuat dengan react native</div>
      <ReactCrudCreateOrUpdate
        submitData={submitData}
        title={title}
        onChangeAdd={onChangeAdd}
        onChangeUpdate={onChangeUpdate}
        editToggle={editToggle}
        onEdit={onEdit}
        isEdit={isEdit}
        editId={setEditId}
        titleEdit={titleEdit}
      />
      {msg && <p className="text-center italic mb-2">{msg}</p>}
      {data.length > 0 && (
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center my-2 mb-3 text-sm">
            <input type="checkbox" checked={checkedAll} onChange={checkedAllData} />
            <span>Checked All data</span>
          </div>
          {checkedLength > 0 && (
            <button
              onClick={deleteAllChecked}
              className="delete border rounded p-2 leading-none bg-red-500 text-white hover:opacity-50 text-xs sm:text-sm"
            >
              Delete All Checked
            </button>
          )}
        </div>
      )}
      <div>{content}</div>
    </div>
  );
};

export default ReactCrud;
