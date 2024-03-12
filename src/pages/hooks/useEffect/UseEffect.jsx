import { Breadcrumb, H1 } from "../../../components/Components";
import { Par } from "../../../components/Tags";
import { Effect1 } from "./Effect1";

export const UseEffect = () => {
  return (
    <div>
      <H1>useEffect</H1>
      <Breadcrumb />
      <Par>
        useEffect (sideeffect/effect) adalah operasi dalam fungsi yang pengaruhi luar fungsi. Effect dependensi adalah array
        berisi identifier baripa variable atau fungsi yant tentukan kapan fungsi dipanggil. jika tidak ada maka fungsi effect
        dipanggil saat komponen terdetensi rerender. jika array kosong effect dipanggil saat render pertama. Render loop
        terjadi saat sebua effect mengubah nilai dependensinya sendiri.
      </Par>
      <Par>
        Clean up function adalah return berupa fungsi dari sebuah effect yang akan dijalankan saat komponen tidak lagi
        digunakan. Banyak yang menyebut mirip componentWillUnmount namun sebenarnya berbeda. componentWillUnmount dijalankan
        ketika komponen dihapus dari interface sedangkan clean up akan dipanggil ketika salah satu nilai dari dependecy
        effect berubah. urutan eksekusi: render, effect, perubahan state, re-render dengan state baru, clean up function,
        effect selanjutnya dijalankan
      </Par>
      <Effect1 />
    </div>
  );
};
