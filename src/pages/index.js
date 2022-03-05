import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";

export default function Index() {
  return (
    <Layout>
      <p>Site building...</p>
      <StaticImage
        alt="Star Wars helmets"
        src="../images/helmets_image.jpg"
      />
    </Layout> 
  )
};