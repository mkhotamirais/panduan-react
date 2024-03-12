import { Breadcrumb, Title } from "../../components/Components";
import { Pre } from "../../components/Tags";

const HomeTips = () => {
  return (
    <div>
      <Title title="tips" />
      <Breadcrumb />
      <div>
        <ol className="list-inside list-decimal">
          <li>
            <span>Generate id from max id</span>
            <Pre>{`
const id = data.reduce((acc, d) => (acc = acc > d.id ? acc : d.id), 0);
const result = [...data, { id: id + 1 }];
            `}</Pre>
          </li>
          <li>
            <span>halo</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomeTips;
