import { useEffect, useState } from "react";
import { H1, Breadcrumb } from "../../../components/Components";
import { Button, Input, InputRef } from "../../../components/Tags";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../app/features/reduxCrud/reduxCrudSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { setSort } from "../../../app/features/reduxCrud/reduxCrudA2Slice";

const ReduxCrudUpdate = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const item = useSelector((state) => state.reduxCrud.find((i) => i.id === id));
  useEffect(() => {
    if (item) {
      setName(item.name);
      setPrice(item.price);
      setDescription(item.description);
    }
  }, []);

  const canSave = [name, price, description].every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      const data = { id, name, price, description };
      data.updatedAt = new Date().toISOString();
      dispatch(updateProduct(data));
      navigate(-1);
      dispatch(setSort("updatedAt"));
      enqueueSnackbar("Update data berhasil", { variant: "success" });
    }
  };
  return (
    <div>
      <H1>Create</H1>
      <Breadcrumb />
      <form onSubmit={handleSubmit} className="border rounded p-2">
        <InputRef id="name" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
        <Input type="number" id="price" value={price} placeholder="price" onChange={(e) => setPrice(e.target.value)} />
        <Input
          id="description"
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" disabled={!canSave}>
          Update
        </Button>
      </form>
    </div>
  );
};

export default ReduxCrudUpdate;
