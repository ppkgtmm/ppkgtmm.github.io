import Project from "./Project";
import data from "./projects.json";

function ProjectList() {
  return (
    <div className="mx-4 md:mx-12 lg:mx-[20vw] xl:mx-[25vw] px-4 py-12 lg:px-8 lg:py-16 flex flex-col">
      <ul className="flex flex-col space-y-10 md:space-y-12">
        {data.map((value, index) => {
          return <Project {...value} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default ProjectList;
