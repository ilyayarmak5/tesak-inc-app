import experts from "../../../data/experts";
import Expert from "./Expert";
const Team = () => {
  return (
    <section className="our-team-main">
      {experts.map((expert) => {
        const { id, specialization, text, url } = expert;
        return (
          <Expert
            key={id}
            specialization={specialization}
            text={text}
            url={url}
          />
        );
      })}
    </section>
  );
};

export default Team;
