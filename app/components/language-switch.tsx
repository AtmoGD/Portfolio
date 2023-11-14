"use client";

import React, { FunctionComponent } from "react";

interface PageProps {}

const LanguageSwitch: FunctionComponent<PageProps> = () => {
  const [language, setLanguage] = React.useState("de");

  return (
    <div>
      <img src="../../public/de.svg" alt="de" />

      {/* <!-- Here comes the switch --> */}

      <img src="../../public/en.svg" alt="en" />
    </div>
  );
};

export default LanguageSwitch;
