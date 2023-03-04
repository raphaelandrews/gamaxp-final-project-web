import { useState, useEffect } from "react";
import UploadService from "./FileUploadService";
import IFile from "./File";

const FileUpload: React.FC = () => {
  const [currentFile, setCurrentFile] = useState<File>();
  

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setCurrentFile(selectedFiles?.[0]);
  };



  return (
    <div>
      <div className="row">
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" onChange={selectFile} />
          </label>
        </div>

        <div className="col-4">
          <button
            className="btn btn-success btn-sm"
            disabled={!currentFile}
            
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;