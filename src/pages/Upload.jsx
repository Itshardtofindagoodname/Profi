import React, { useState, useRef, useEffect } from "react";
import Modal from "../components/Model";
import { FaLinkSlash } from "react-icons/fa6";
import { CiFileOff, CiFileOn } from "react-icons/ci";
import axios from "axios";

function Upload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLinksSection, setIsLinksSection] = useState(true);
  const [links, setLinks] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch data from local storage on mount
    const storedLinks = JSON.parse(localStorage.getItem("links")) || [];
    const storedDocuments = JSON.parse(localStorage.getItem("documents")) || [];
    setLinks(storedLinks);
    setDocuments(storedDocuments);
  }, []);

  const toggleLinksSection = () => {
    setIsLinksSection(true);
  };

  const toggleDocumentsSection = () => {
    setIsLinksSection(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleUploadFiles = () => {
    fileInputRef.current.click();
  };

  const handleFileSelection = (event) => {
    setLoading(true);
    const selectedFiles = Array.from(event.target.files);
    const fileObjects = selectedFiles.map((file) => ({
      name: file.name,
    }));
    const form = new FormData();
    form.append("file", selectedFiles[0]);
    form.append("type", "pdf");

    axios({
      method: "post",
      url: "http://127.0.0.1:5000/upload",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setDocuments([...documents, ...fileObjects]);
        localStorage.setItem("documents", JSON.stringify([...documents, ...fileObjects]));
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  const handleLinkSubmission = (linkData) => {
    setLoading(true);
    const form = new FormData();
    form.append("url", linkData.links);
    form.append("type", linkData.type);

    axios({
      method: "post",
      url: "http://127.0.0.1:5000/upload",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setLinks([...links, { ...linkData, taskId: response }]);
        localStorage.setItem("links", JSON.stringify([...links, { ...linkData, taskId: response }]));
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="container h-screen flex flex-col mx-auto p-4">
      <div className="flex justify-between items-center my-4">
        <div>
          <button
            className={`text-black mr-3 font-bold text-xl ${
              !isLinksSection
                ? " font-normal"
                : "text-blue-500 underline underline-offset-2"
            }`}
            onClick={toggleLinksSection}
            disabled={isLinksSection}
          >
            Link
          </button>
          <button
            className={` text-black font-bold text-xl ${
              isLinksSection
                ? " font-normal"
                : " text-blue-500 underline underline-offset-2"
            }`}
            onClick={toggleDocumentsSection}
            disabled={!isLinksSection}
          >
            Document
          </button>
        </div>
        {isLinksSection ? (
          <Modal
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            handleLinkSubmission={handleLinkSubmission}
          />
        ) : (
          <div>
            <input
              type="file"
              accept="application/pdf, .doc, .docx"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelection}
            />
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-md"
              onClick={handleUploadFiles}
            >
              Upload Files
            </button>
          </div>
        )}
      </div>
      <div className=" mt-4 border-2 border-gray-300 p-4 rounded-lg h-96 flex flex-col">
        {loading && <p>Loading...</p>}
        <div className="flex flex-wrap">
          {isLinksSection ? (
            links.length > 0 ? (
              links.map((link, index) => (
                <div
                  key={index}
                  className="m-2 p-4 rounded-lg bg-blue-100 h-40 w-40 text-center flex flex-col justify-center"
                >
                  <h1 className="text-xl font-bold ">{link.type}</h1>
                  <hr className=" border-t-2 border-black" />
                  <h2 className="text-md overflow-hidden mt-2 text-indigo-300">
                    {link.links}
                  </h2>
                </div>
              ))
            ) : (
              <div className="flex flex-row">
                <p className="font-thin">No links added yet</p>
                <FaLinkSlash size={25} className="ml-2" />
              </div>
            )
          ) : documents.length > 0 ? (
            documents.map((document, index) => (
              <div
                key={index}
                className="m-2 p-4 rounded-lg bg-blue-100 h-40 w-40 flex flex-col"
              >
                <CiFileOn size={40} />
                <p className="mt-2 text-md font-light">{document.name}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-row items-center">
              <p className="font-thin">No documents added yet</p>
              <CiFileOff size={25} className="ml-2" />
            </div>
          )}
        </div>
      </div>
      <button
        className="bg-blue-700 text-white mt-4 w-40 px-4 py-2 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Upload;
