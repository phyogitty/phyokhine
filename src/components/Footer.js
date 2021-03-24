import React from "react";

function Footer(props) {
  const themeFooter =
    props.theme.otherBgDark +
    " footer-size text-center py-3 " +
    props.theme.textColour;
  return (
    <div className="">
      <div className={themeFooter}>
        <div className="d-flex flex-row justify-content-center py-3">
          <div>copyright</div>
          <div> © </div>
          <div> 2021</div>
        </div>
        <p className="pb-3">Empowered By React Hooks & React Bootstraps</p>
      </div>
      {/* <div className="bg-blue p-1"></div> */}
    </div>
  );
}

export default Footer;
