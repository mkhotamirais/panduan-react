import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Breadcrumb, H1 } from "../../../components/Components";
import TimeAgo from "./TimeAgo";

const ReduxCrudDetail = () => {
  const { id } = useParams();
  const item = useSelector((state) => state.reduxCrud.find((d) => d.id === id));
  let content;
  if (item) {
    content = (
      <div className="border rounded-lg p-3">
        <div>Name : {item.name}</div>
        <div>Price : {item.price}</div>
        <div>Desciription : {item.description}</div>
        <div className="text-sm">
          Created <TimeAgo time={item.createdAt} />
          <br />
          Updated <TimeAgo time={item.updatedAt} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <H1>redux crud detail</H1>
      <Breadcrumb />
      {content}
    </div>
  );
};

export default ReduxCrudDetail;
