import React, { useState } from "react";
import styled from "styled-components";
import { MdWindow } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { SiGooglechrome } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Folder from "../component/Folder";
import FolderPortal from "../component/FolderPortal";
import { AnimatePresence } from "framer-motion";

export default function First() {
  const [clickedFolder, setClickedFolder] = useState(null);

  const handleFolderClick = (name) => {
    setClickedFolder(name);
  };

  const handleClosePortal = () => {
    setClickedFolder(null);
  };

  return (
    <FirstPage>
      <FolderBox>
        {Array.from({ length: 5 }, (_, index) => (
          <Folder
            key={index}
            name={`Name${index + 1}`}
            onClick={handleFolderClick}
          />
        ))}
      </FolderBox>
      <AnimatePresence>
        {clickedFolder && (
          <>
            <Overlay /> 
            <FolderPortal
              key="folder-portal"
              name={clickedFolder}
              onClose={handleClosePortal}
            />
          </>
        )}
      </AnimatePresence>
      <Box>
        <IconBase>
          <WindowsIcon fontSize={"1.5rem"} />
          <DirectoryIcon fontSize={"1.5rem"} />
          <GoogleChrome fontSize={"1.5rem"} />
          <Vscode fontSize={"1.5rem"} />
        </IconBase>
      </Box>
    </FirstPage>
  );
}

const FirstPage = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url("public/Photos/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const FolderBox = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 5rem); /* 5 rows */
  grid-template-columns: repeat(2, 5rem); /* 2 columns */
  gap: 20px; /* Gap between items */
  padding: 5px; /* Padding around the grid */
  cursor: pointer; /* Ensure cursor is pointer */
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 999; /* Ensure overlay is above other content */
`;

const Box = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 40rem;
  height: 3rem;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.5), 0 1px 5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  color: white;
`;

const IconBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 2px;
`;

const WindowsIcon = styled(MdWindow)`
  transition: transform 0.3s ease, background 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.2);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.5),
      0 1px 5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.05rem;
  }
`;

const DirectoryIcon = styled(GoFileDirectoryFill)`
  transition: transform 0.3s ease, background 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    transform: scale(1.2);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.05),
      0 1px 5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.05rem;
  }
`;

const GoogleChrome = styled(SiGooglechrome)`
  transition: transform 0.3s ease, background 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    transform: scale(1.2);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.05),
      0 1px 5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.05rem;
  }
`;

const Vscode = styled(VscVscode)`
  transition: transform 0.3s ease, background 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    transform: scale(1.2);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.05),
      0 1px 5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.05rem;
  }
`;
