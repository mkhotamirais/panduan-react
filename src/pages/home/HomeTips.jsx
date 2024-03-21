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
          <li>
            <span>Select spesifik object key</span>
            <Pre>{`
const obj = { id: 1, nama: "ahmad", umur: 20 };
const result = Object.keys(obj)
  .filter((o) => o !== "nama")
  .reduce((newObj, key) => {
    newObj[key] = obj[key];
    return newObj;
  }, {});
console.log(obj);
console.log(result);
            `}</Pre>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomeTips;
