import folder from "../../../../assets/folder.png";

const NoResult = () => {
  return (
    <section className="rounded-b-lg bg-white px-5 py-20 lg:py-40 flex flex-col items-center">
      <img className="w-20" src={folder} alt="No files" />
      <h3 className="font-medium text-xl">Sorry, no results found</h3>
    </section>
  );
};

export default NoResult;
