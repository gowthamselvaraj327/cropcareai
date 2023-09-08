import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import "./FileUpload.css";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const DropFileInput = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setResult, setUpImg } = useContext(AppContext);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFileName(droppedFile.name);
      setFile(droppedFile);
      setImage(URL.createObjectURL(droppedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if a file has been selected
    if (!file) {
      alert("Please select a file before analyzing.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1]; // Get the base64 data
      const imageObject = { data: [base64Image] };

      try {
        setLoading(true);
        const endPoint =
          "https://gowthamselvaraj-plant-disease.hf.space/api/predict";
        const { data } = await axios.post(endPoint, imageObject);
        if (data) {
          setUpImg(image);
          setResult(data.data[0].confidences);
          navigate("/result");
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <section className="steps section container">
      {loading ? (
        <Loader />
      ) : (
        <div className="steps__bg">
          <h2 className="section__title-center steps__title">
            Upload Image
          </h2>

          <div
            className="steps__container flex-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="steps__card">
              <form
                action=""
                onClick={() => document.querySelector(".input-field").click()}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="input-field"
                  hidden
                  onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name);
                    if (files) {
                      setFile(files[0]);
                      setImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />
                {image ? (
                  <img src={image} width={250} height={190} alt={fileName} />
                ) : (
                  <>
                    <MdCloudUpload color="#2E8B57" size={60} />
                    <p>Browse Files to Upload <br /><center> or <br /> Drag and Drop </center></p>
                  </>
                )}
              </form>
            </div>
            <div className="steps__card">
              <div className="upload-row">
                <AiFillFileImage color="#2E8B57" />
                <span className="upload-content">
                  {fileName} -{" "}
                  <MdDelete
                    cursor="pointer"
                    onClick={() => {
                      setFileName("No selected File");
                      setImage(null);
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="steps__card_button">
              <Link
                to="/upload"
                className="button button--flex"
                onClick={handleSubmit}
              >
                Analyze <i className="ri-arrow-right-line button__icon"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
