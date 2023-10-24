type ProjectProps = {
  project: ProjectData;
};

export const Project = (props: ProjectProps) => {
  const { project } = props;
  return (
    <div className="">
      <div>
        <img src={project.imageUrl} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url}>View</a>
    </div>
  );
};
