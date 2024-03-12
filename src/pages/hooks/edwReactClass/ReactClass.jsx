import { EdwReactClasssForm } from "./EdwReactClasssForm";
import { EdwReactClass1, EdwReactClass2 } from "./EdwReactClassBasic";
import { EdwReactClassValidation } from "./EdwReactClassValidation";

const ReactClass = () => {
  return (
    <section className="flex flex-col gap-2">
      <EdwReactClass1 nama="ahmad" />
      <EdwReactClass2 nama="ahmad2" />
      <EdwReactClasssForm />
      <EdwReactClassValidation />
    </section>
  );
};

export default ReactClass;
