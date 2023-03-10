import React from "react";
import { Box, styled, CardMedia } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Loading from "./Loading";

// import { saveAs } from "file-saver";

const Container = styled(Box)`
  /* background: #f2f3f7; */
  width: 300px;
  height: 310px;
  flex: 20%;
  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;
const Main = styled(Box)`
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
const MedImg = styled(CardMedia)`
  width: 290px;
  height: 220px;
  padding: 18px;
`;
const Icon = styled(Box)`
  margin-left: 17px;
  /* background: #f2f3f7; */
`;
function Output({ records, isLoading }) {
  const download = async (e) => {
    const originalImage = e;
    const image = await fetch(originalImage);

    //Split image name
    const nameSplit = originalImage.split("/");
    const duplicateName = nameSplit.pop();

    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "" + duplicateName + "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <h1>Output</h1>

      {isLoading === true && (
        <>
          <Main>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </Main>
        </>
      )}

      <Main>
        {isLoading === false &&
          records.map((res) => {
            return (
              <Container key={res.id}>
                <Box>
                  <MedImg
                    component="img"
                    image={res.largeImageURL}
                    alt="Paella dish"
                  />
                </Box>
                <Icon>
                  <a
                    href={res.largeImageURL}
                    download
                    onClick={(e) => download(res.largeImageURL)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DownloadIcon
                      style={{ color: "grey", cursor: "pointer" }}
                    />
                  </a>
                </Icon>
              </Container>
            );
          })}
      </Main>
    </>
  );
}

export default Output;
