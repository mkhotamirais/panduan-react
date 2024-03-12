import { Breadcrumb, Title } from "../../components/Components";
import { H3, Par } from "../../components/Tags";
import ReactClass from "../hooks/edwReactClass/ReactClass";
import ReactStyling from "./ReactStyling";

const HomeRingkasan = () => {
  return (
    <section>
      <div>
        <Title title="ringkasan" />
        <Breadcrumb />
      </div>
      <article>
        <Par>
          ReactJs adalah library js untuk UI Web App, beda dengan React Native (framework js untuk mobile app).
          Library/Pustaka perlu library pendukung seperti react-router. Prinsipnya component based, declarative, learn once
          write anywhere. Menggunakan Firtual Dom, era sebelumnya dengan js native atau jquery. Extensi .jsx (javascript x
          html). Oleh Jordan Walke, FB. Populer, komunitas besar aktif, open source, ikut trend js modern, banyak digunakan
          perusahan. Tools: nodejs, jpn, vercel, gihub. Cara istall bisa dengan Vite atau Cra.
        </Par>
        <Par>
          Component adalah bagian terkecil React App, tersusun dari elements, konsepnya mirip fungsi. Tipe data component:
          props, state. Statefull (class component) stateless (functional component direkomendasikan). Props adalah properti
          atau variable dari luar komponen untuk komunikasi parent ke child. State adalah properti private menempel pada
          komponen dan hanya bisa dimodifikasi di lingkup komponen. Props hanya berlaku di Stateless (functional component).
          State tersedia di Stateless dan Statefull (class component). Satu component sebaiknya memiliki satu tugas.
        </Par>
        <Par>
          Rendering variable dengan kuruang kurawal, dibutuhkan saat looping (rendering list array dengan map), conditional
          rendering (if, else, sort circuit evalutation && ||), komunikasi komponen. Form validasi. Lifecycle siklus hidup
          statefull <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">lihat diagram</a>.
          componentDidMout (pertama render); componentDidUpdate (setelah render, kapan diupdate); componentWillUnmount (kapan
          akan dicopot). Router dengan library react-router-dom. State management dengan library redux mengumpulkan state di
          global state, pisahkan logic dan view, dispatch cara untuk jalankan reducer (action creator), redux thunk untuk
          asynchronous
        </Par>
        <Par>
          Hook adalah cara agar bisa akses lifecycle component dengan stateless. Sebelumnya hanyal stateful yang punya state
          dan akses lifecycle. Tapi stateleff punya side effect (efek samping) untuk buat seolah stateless bersifat stateful.
          ReactJs akui performa stateless lebih cepat. Aturannya hanya bisa dipanggil di top level function. macamnya:
          useState, useEffect, useReducer, customHook.
        </Par>
        <H3>ReactStyling</H3>
        <ReactStyling />
        <H3>React Class</H3>
        <ReactClass />
      </article>
    </section>
  );
};

export default HomeRingkasan;
