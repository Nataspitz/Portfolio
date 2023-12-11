import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { StyleDescriptionArticle } from "./StyleDescriptionArticle";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export function DescriptionArticle() {
  const [openDescription, setOpenDescription] = useState(false);

  const springProps = useSpring({
    maxHeight: openDescription ? 1000 : 150,
    opacity: openDescription ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <StyleDescriptionArticle>
      <h1>
        Welcome to <span> My Tech World!</span>
      </h1>
      <div className="quote">
        <p>
          "They say that the ideal is to improve the wheel and not replace it,
          but before inventing it, what excuse did they say?"
        </p>
        <cite>- Natã Spitz Alves</cite>
      </div>
      <div className="aboutMe">
        <div className="text">
          <p>
            Staying in the comfort zone? Not my style! My journey has always
            been propelled by an unwavering quest to comprehend the intricacies
            of how things work and discover inspiration along the way.
          </p>
          {openDescription ? (
            <animated.div className="rest_text" style={springProps}>
              <p>
                I am a fervent enthusiast for new knowledge and passionate
                about assisting people. I've found my true passion in
                technology, where every challenge is an opportunity for
                learning and growth. After all, comfort has never driven
                significant innovations.
              </p>
              <p>
                On my journey as a web developer, I've realized that technology
                is more than just codes and algorithms; it's the tool that
                enables the creation of solutions that positively impact
                people's lives. My creative approach, insatiable thirst for
                knowledge, and emotional intelligence are the cornerstones
                shaping my daily work.
              </p>
              <p>
                I am ready to tackle the most complex challenges because I
                believe every line of code is an opportunity to express my
                passion for innovation. If you're seeking a professional who
                goes beyond the conventional, you're in the right place. Let's
                together turn ideas into reality!
              </p>
            </animated.div>
          ) : null}
        </div>
        <button onClick={() => setOpenDescription(!openDescription)}>
          {openDescription ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
    </StyleDescriptionArticle>
  );
}
