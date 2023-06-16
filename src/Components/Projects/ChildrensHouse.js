import '../Styling/ProjectBook.scss';

import ProjectPage from "./ProjectPage";
import ProjectContent from "./ProjectContent";

import banerimg from "../../assets/Cover_DOLJULPOL147320.png";
import srt1 from "../../assets/kaira1.png";
import str2 from "../../assets/kaira2.png";
import str3 from "../../assets/kaira3.png";
import str4 from "../../assets/kaira4.png";
import str5 from "../../assets/kaira5.png";
import str6 from "../../assets/kaira6.png";
import str7 from "../../assets/kaira7.png";
import str8 from "../../assets/kaira8.png";



const ChildrensHouse = () => {
  return (
    <ProjectPage>
      {/* <ProjectContent title={`children's house`} banerimg={banerimg} /> */}
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
          <img src={str8} alt="book page" />
        </div>
        <div className='pair'>
          <img src={str7} alt="book page" />
          <img src={str6} alt="book page" />
        </div>
      </div>
    </ProjectPage>
  );
};
export default ChildrensHouse;
