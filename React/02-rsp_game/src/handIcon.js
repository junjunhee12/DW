import rockImg from "./assets/rock.svg";
import paperImg from "./assets/paper.svg";
import scissorImg from "./assets/scissor.svg";

const IMG = {
  rock: rockImg,
  paper: paperImg,
  scissor: scissorImg,
};

function HandIcon({ value, className }) {
  const src = IMG[value];
  return <img src={src} alt={value} className={className} />;
}

export default HandIcon;
