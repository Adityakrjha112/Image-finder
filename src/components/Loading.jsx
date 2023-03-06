import React from "react";
import Skeleton from "react-loading-skeleton";
import { Box, styled } from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
const Container = styled(Box)`
  /* background: #f2f3f7; */
  width: 300px;
  height: 310px;
  flex: 20%;
`;

const Shadow = styled(Box)`
  margin-left: 20px;
`;

function Loading() {
  return (
    <>
      <Container>
        <Shadow>
          <Skeleton
            width={"290px"}
            height={"220px"}
            baseColor="rgb(10,25,41)"
          />
        </Shadow>
        <Shadow>
          <Skeleton width={"200px"} baseColor="rgb(10,25,41)" />
        </Shadow>
      </Container>
    </>
  );
}

export default Loading;
