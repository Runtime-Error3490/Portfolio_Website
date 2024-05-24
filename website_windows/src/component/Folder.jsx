import React from 'react';
import styled from 'styled-components';

export default function Folder({ name,onClick}) {
  return (
    <FolderBox onClick={()=>onClick(name)}>
      <Folders></Folders>
      <Text>{name}</Text>
    </FolderBox>
  );
}

const FolderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Folders = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("/Photos/folder.svg");
  background-size: contain;
  background-repeat: no-repeat;
`;

const Text=styled.div`
font-size: 12px;
color: white;
`;