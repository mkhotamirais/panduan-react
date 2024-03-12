import "./reactStyling.css";
import "./reactStyling.scss";
import styleModule from "./reactStyling.module.css";
import styled from "styled-components";

const Li = styled.li`
  color: purple;
`;
const ReactStyling = () => {
  const style = {
    color: "orange",
  };
  return (
    <ul className="list-disc list-inside">
      <li>jenisnya: plain css, css preprocessor, inline, css module, cssinjs. Berikut penerapannya</li>
      <li>css preprocessor: SASS, PostCss, Less, butuh dependensi tambahan (node sass)</li>
      <li className="merah">plain css</li>
      <li className="hijauSass">css preprocessor (sass)</li>
      <li style={{ color: "blue" }}>inline style</li>
      <li style={style}>inline style2</li>
      <li className={styleModule.kuning}>css module</li>
      <Li>cssinjs</Li>
      <li>bootstrap, tailwind, dll</li>
    </ul>
  );
};

export default ReactStyling;
