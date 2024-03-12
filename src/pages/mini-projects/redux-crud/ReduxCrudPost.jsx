import { useEffect, useState } from "react";
import { H1, Breadcrumb } from "../../../components/Components";
import { Button, Input, InputRef } from "../../../components/Tags";
import { useDispatch } from "react-redux";
import { postProduct } from "../../../app/features/reduxCrud/reduxCrudSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useSnackbar } from "notistack";

const ReduxCrudPost = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const canSave = data?.name && data?.price && data?.description;

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value.trim() });
  };

  useEffect(() => {
    console.log();
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      data.id = uuidv4();
      data.createdAt = new Date().toISOString();
      data.updatedAt = new Date().toISOString();
      dispatch(postProduct(data));
      navigate(-1);
      enqueueSnackbar("Create data berhasil", { variant: "success" });
    }
  };
  return (
    <div>
      <H1>Create</H1>
      <Breadcrumb />
      <form onSubmit={handleSubmit} className="border rounded p-2">
        <InputRef id="name" placeholder="name" onChange={handleChange} />
        <Input type="number" id="price" placeholder="price" onChange={handleChange} />
        <Input id="description" placeholder="description" onChange={handleChange} />
        <Button type="submit" disabled={!canSave}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default ReduxCrudPost;
