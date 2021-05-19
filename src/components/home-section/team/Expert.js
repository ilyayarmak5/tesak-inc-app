import { useState, useRef, useEffect } from "react";
import ExpertToggle from "./ExpertToggle";
import ExpertContent from "./ExpertContent";

import Fade from "react-reveal/Fade";

const Expert = ({ specialization, text, url }) => {
  const [isOpened, setIsOpened] = useState(false);
  const expertRef = useRef(null);
  const expertContainerRef = useRef(null);
  useEffect(() => {
    const expertHeight = expertRef.current.getBoundingClientRect().height;
    if (isOpened) {
      expertContainerRef.current.style.height = `${expertHeight}px`;
    } else {
      expertContainerRef.current.style.height = "0px";
    }
  }, [isOpened]);
  return (
    <article className="expert-container">
      <Fade bottom>
        <ExpertToggle
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          specialization={specialization}
        />
        <ExpertContent
          isOpened={isOpened}
          expertContainerRef={expertContainerRef}
          expertRef={expertRef}
          text={text}
          url={url}
        />
      </Fade>
    </article>
  );
};

export default Expert;
