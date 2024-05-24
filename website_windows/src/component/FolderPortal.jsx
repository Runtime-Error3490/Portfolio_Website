import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import PortalData from "./PortalData";
export default function FolderPortal({ name, onClose }) {
  const [isMaximized, setIsMaximized] = useState(false);
  const handleMaximizeToggle = () => {
    setIsMaximized(!isMaximized);
  };
  return (
    <PortalContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      isMaximized={isMaximized}
    >
      <Header>
        <Title>{name}</Title>
        <ButtonGroup>
          <MaximizeButton onClick={handleMaximizeToggle}>
            {isMaximized ? <FaRegWindowRestore /> : <FaRegWindowMaximize />}
          </MaximizeButton>
          <CloseButton onClick={onClose}>
            <IoMdClose />
          </CloseButton>
        </ButtonGroup>
      </Header>
      <Content>
        <PortalData/>
      </Content>
    </PortalContainer>
  );
}

const PortalContainer = styled(motion.div)`
  position: fixed;
  top: ${(props) => (props.isMaximized ? 0 : "10%")};
  left: ${(props) => (props.isMaximized ? 0 : "10%")};
  width: ${(props) => (props.isMaximized ? "100%" : "80%")};
  height: ${(props) => (props.isMaximized ? "100%" : "80%")};
  background: white;
  border: 1px solid #ccc;
  border-radius: ${(props) => (props.isMaximized ? 0 : "10px")};
  box-shadow: ${(props) =>
    props.isMaximized ? "none" : "0 4px 8px rgba(0, 0, 0, 0.1)"};
  z-index: 1000;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f5f5f5;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h3`
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const MaximizeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #0056b3;
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #c82333;
  }
`;

const Content = styled.div`
  padding: 20px;
  overflow-y: auto;
`;
