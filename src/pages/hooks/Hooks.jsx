import { setOpenSidebar } from "../../app/features/collapseSlice";
import { Breadcrumb, Title } from "../../components/Components";
import { useDispatch } from "react-redux";

const Hooks = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Title title="hooks" />
      <Breadcrumb />
      <div>
        <button
          className={`bg-blue-500 p-2 rounded-lg text-white hover:opacity-70`}
          onClick={() => dispatch(setOpenSidebar())}
        >
          Hooks List
        </button>
      </div>
    </div>
  );
};

export default Hooks;
