import Link from "next/link";
import React, { FunctionComponent } from "react";
import LanguageSwitch from "./language-switch";

interface PageProps {}

const HeaderComponent: FunctionComponent<PageProps> = () => {
  return (
    <div>
      {/* <!-- Image --> */}
      <div></div>

      {/* <!-- Links --> */}
      <div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* <!-- Language --> */}
      <LanguageSwitch />
    </div>
  );
};

export default HeaderComponent;
