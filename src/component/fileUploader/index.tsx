import React, { useState } from 'react'
import { Button } from '@mui/material'
import { FiUpload } from "react-icons/fi"
import { FaUndoAlt } from 'react-icons/fa'

interface Props {
  onClose: () => void;
  onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<Props> = ({ onClose, onFileUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles([...selectedFiles, ...filesArray]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setSelectedFiles([...selectedFiles, ...droppedFiles]);
    setDragging(false);
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => onFileUpload(file));
      setSelectedFiles([]);
      onClose();
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="fileUploader__popup-container">
      <div className="fileUploader__popup-inner">
        <h2>파일 업로드 하기</h2>
        <div className="fileUploader__popup-file-input">
          <input type="file" onChange={handleFileChange} />
        </div>
        <div
          className={`${dragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="fileUploader__popup-file-list">
          {selectedFiles.map((file, index) => (
            <div key={index} className="file-item">
              <span>{file.name}</span>
            </div>
          ))}
          </div>
        </div>
        <div className="fileUploader__popup-button">
          <Button variant="contained" startIcon={<FiUpload />} onClick={handleUpload}>업로드</Button>
          <Button variant="contained" startIcon={<FaUndoAlt />} onClick={onClose}>취소</Button>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
