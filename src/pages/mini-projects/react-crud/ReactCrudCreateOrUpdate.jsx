const ReactCrudCreateOrUpdate = ({
  submitData,
  title,
  titleEdit,
  onChangeUpdate,
  onChangeAdd,
  editToggle,
  isEdit,
  onEdit,
}) => {
  return (
    <form onSubmit={isEdit ? onEdit : submitData} className="flex mb-3">
      <input
        type="text"
        value={isEdit ? titleEdit : title}
        className="border w-full p-2"
        onChange={isEdit ? onChangeUpdate : onChangeAdd}
      />
      {isEdit ? (
        <>
          <button type="submit" className="border bg-green-500 text-white px-2 hover:opacity-50">
            save
          </button>
          <button type="button" onClick={editToggle} className="border bg-slate-500 text-white px-2 hover:opacity-50">
            cancel
          </button>
        </>
      ) : (
        <button type="submit" className="border bg-blue-500 text-white px-2 hover:opacity-50">
          add
        </button>
      )}
    </form>
  );
};
ReactCrudCreateOrUpdate.propTypes;

export default ReactCrudCreateOrUpdate;
