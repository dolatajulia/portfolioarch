import ProjectPage from "./ProjectPage";
import ProjectContent from "./ProjectContent";
import "../Styling/ProjectBook.scss";

import srt1 from "../../assets/rakos1.png";
import str2 from "../../assets/rakos2.png";
import str3 from "../../assets/rakos3.png";
import str4 from "../../assets/rakos4.png";
import str5 from "../../assets/rakos5.png";
import str6 from "../../assets/rakos6.png";

const RakosPatak = () => {
  return (
    <ProjectPage>
      <div className="book">
        {" "}
        <div className="pair">
          <img src={srt1} alt="book page" />
          <img src={str2} alt="book page" />
        </div>
        <div className="pair">
          <img src={str3} alt="book page" />
          <img src={str4} alt="book page" />
        </div>
        <div className="pair">
          <img src={str5} alt="book page" />
          <img src={str6} alt="book page" />
        </div>
      </div>
    </ProjectPage>
  );
};
export default RakosPatak;
