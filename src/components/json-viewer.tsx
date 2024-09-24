"use client";
import React from "react";

import text from "../../public/response.json";
import { JSONTree } from "react-json-tree";
const JsonViewer = () => {
  return (
    <JSONTree data={text} theme={{ base0E: "#ae81ff" }} invertTheme={false} />
  );
};

export default JsonViewer;
