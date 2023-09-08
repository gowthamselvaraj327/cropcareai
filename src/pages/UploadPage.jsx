import React from "react";
import DropFileInput from "../components/dragAndDrop/FileUpload";
import Navbar from "../components/navbar/Navbar";

const UploadPage = () => {
  return (
    <div>
      <Navbar />
      <DropFileInput />
    </div>
  );
};

export default UploadPage;
