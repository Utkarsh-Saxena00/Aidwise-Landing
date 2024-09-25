import React, { FC } from "react";
interface IFrameViewerProps {
  src: string;
}
const IFrameViewer: FC<IFrameViewerProps> = ({ src }) => {
  return (
    <iframe src={src} className="  h-[100vh] w-[1000px]" allowFullScreen />
  );
};

export default IFrameViewer;
