import { useData } from "../../data/DataProvider";

const AboutMe = () => {
  const { about } = useData();
  return (
    <>
      <h1>About me</h1>
      {about.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
};

export default AboutMe;
