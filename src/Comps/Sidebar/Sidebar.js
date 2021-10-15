import React from "react";
import Sidebaroptions from "./Sidebaroptions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./css/sidebar.css";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <Sidebaroptions src={user.photoURL} title={user.displayName} />
      <Sidebaroptions
        src="data:image/jpeg;base64,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"
        title="Tech Crunch"
      />
      <Sidebaroptions
        src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
        title="Friends"
      />
      <Sidebaroptions
        src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
        title="Groups"
      />
      <Sidebaroptions
        src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
        title="Watch"
      />
      <Sidebaroptions
        src="https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png"
        title="Events"
      />
      <Sidebaroptions Icon={ExpandMoreIcon} title="See More" />
    </div>
  );
};

export default Sidebar;