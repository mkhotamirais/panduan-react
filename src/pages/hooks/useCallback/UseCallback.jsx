import { Breadcrumb, H1 } from "../../../components/Components";
import { Par } from "../../../components/Tags";
import Callback1 from "./Callback1";

export const UseCallback = () => {
  return (
    <div>
      <H1>useCallback</H1>
      <Breadcrumb />
      <Par>
        useCallback identity adalah nilai pasti milik setiap identifier. misal, fungsi yang dideklarasikan di dalam komponen
        akan memiliki identity yang berbeda setiap komponen dirender. Hal ini akan menyebabkan render loop ketika memasukan
        identity yang berbeda pada effect dependency. untuk mempertahankan nilai identity dari sebuah fungsi, signaturenya
        mirip useEffect namun nilai dependensi di sini yang digunakan untuk menentukan apakah nilai identity dirubah atau
        tidak.
      </Par>
      <Callback1 />
    </div>
  );
};
