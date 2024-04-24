import { ABOUT_DATA } from "../data/index";

const AboutCards = () => {
  return (
    <>
      {ABOUT_DATA.map((data, index) => (
        <div
          key={index}
          className="flex flex-col md:w-1/2 lg:w-1/3 h-[200px] gap-3 lg:leading-loose"
        >
          <h2 className="font-bold">{data.title}</h2>
          <p className="text-gray-600 w-[300px]">{data.description}</p>
        </div>
      ))}
    </>
  );
};

export default AboutCards;
