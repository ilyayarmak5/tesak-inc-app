import projectOneImg from "../assets/img/projects/project-one.png";
const projects = [
  {
    id: 1,
    header: "Stories Ag",
    text: "Custom WordPress website for a Swiss Photography Company.",
    image: projectOneImg,
    url: "/project/1",
    backgroundClr: "#181818",
    client: "Stories Ag",
    website: (
      <a target="_blank" rel="noreferrer" href="https://new.stories.ag/">
        new.stories.ag
      </a>
    ),
    year: "March, 2021",
    category: "wut",
    description: [
      "The work consists of recreation of an older version of the website but with expanded functionality. Our key success in this project was  to be sure that the pre-animation on the website worked smoothly. With the help of image compression and correct manipulation with the content, we were able to unleash the power of WP by working with custom fields and allowing the client to change on his side.",
      "We spent enough time to produce the product that is considered to be easy-to-use and optimized to the needs of our client. This is considered to be one of our largest and successful projects.",
    ],
    services: ["WordPress Development", "Website Optimization"],
  },
];

export default projects;
