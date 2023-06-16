import ProjectPage from "./ProjectPage";
import ProjectContent from "./ProjectContent";
import '../Styling/ProjectBook.scss';

import srt1 from "../../assets/social1.png";
import str2 from "../../assets/social2.png";
import str3 from "../../assets/social3.png";
import str4 from "../../assets/social4.png";
import str5 from "../../assets/social5.png";
import str6 from "../../assets/social6.png";


const SocialHousing = () => {
  return (
    <div>
      <ProjectPage>
      <div className='book'>
        <div className='pair'>
          <img src={srt1} alt="book page" />
          <img src={str2} alt="book page" />
        </div>
        <div className='pair'>
          <img src={str3} alt="book page" />
          <img src={str4} alt="book page" />
        </div>
        <div className='pair'>
          <img src={str5} alt="book page" />
          <img src={str6} alt="book page" />
        </div>
        
      </div>
      </ProjectPage>
    </div>
  );
};
export default SocialHousing;
