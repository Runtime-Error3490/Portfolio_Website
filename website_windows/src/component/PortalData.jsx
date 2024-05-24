import React, { useRef, useState } from "react";
import { HStack, Stack, Text } from "@chakra-ui/react";
import styled from "styled-components";
import vlcVideo from "/Photos/vid.mp4"; // Adjusted import path for the video file

export default function PortalData() {
  const githubLinks = [
    {
      name: "name1",
      url: "https://github.com/Runtime-Error3490/meraapp",
    },
    {
      name: "name2",
      url: "https://github.com/your-username/your-repo2",
    },
    {
      name: "name3",
      url: "https://github.com/your-username/your-repo3",
    },
  ];

  const [githubUrl, setGithubUrl] = useState(""); 

  const handleGithubLink = (url) => {
    setGithubUrl(url);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <HStack spacing={4}>
      <Stack onClick={() => handleGithubLink(githubLinks[0].url)}>
        <Github />
        <Text fontSize={"12px"}>GitHub</Text>
      </Stack>
      <Stack
        align={"center"}
        onClick={handleVideoClick}
        style={{ cursor: "pointer" }}
      >
        <VideoIcon />
        <Text fontSize={"12px"}>{isPlaying ? "Pause Video" : "Play Video"}</Text>
      </Stack>
      {githubUrl && <RedirectToGithub url={githubUrl} />}
      <video ref={videoRef} style={{ display: isPlaying ? "flex" : "none" }}>
        <source src={vlcVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </HStack>
  );
}

const Github = styled.div`
  background-image: url("/Photos/github.svg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const VideoIcon = styled.div`
  background-image: url("/Photos/vlc.svg"); // Replace with your video icon
  background-size: cover;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const RedirectToGithub = ({ url }) => {
  window.open(url, "_blank");
  return null;
};
