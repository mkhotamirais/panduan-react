import { Breadcrumb, H1 } from "../../../components/Components";
import { Par } from "../../../components/Tags";
import { CustomHook1 } from "./CustomHook1";

export const CustomHook = () => {
  return (
    <div>
      <H1>custom hook</H1>
      <Breadcrumb />
      <Par>
        <b>custom hook</b> aturan namanya diawali use lalu Hook misal useUser. di dalam custom hook bisa panggil hook bawaan
      </Par>
      <CustomHook1 />
    </div>
  );
};
