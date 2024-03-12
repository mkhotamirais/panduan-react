import { Breadcrumb, Title } from "../../components/Components";

const HomeComponents = () => {
  return (
    <section>
      <div>
        <Title title="vanilla components" />
        <Breadcrumb />
      </div>
      <div>
        <a href="../components/carousel/index.html" target="_blank" rel="noopener noreferer" className="underline">
          Carousel
        </a>
      </div>
    </section>
  );
};

export default HomeComponents;
