import ProjectPage from "./ProjectPage";
import ProjectContent from "./ProjectContent";
import "../Styling/ProjectBook.scss";

import srt1 from "../../assets/coliving1.png";
import str2 from "../../assets/coliving2.png";
import str3 from "../../assets/coliving3.png";
import str4 from "../../assets/coliving4.png";
import str5 from "../../assets/coliving5.png";
import str6 from "../../assets/coliving6.png";

const Coliving = () => {
  return (
    <ProjectPage>
      <div className="book">
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
export default Coliving;
