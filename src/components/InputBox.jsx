import React, { useState } from "react";
import { InputBase, Button, Box, styled, Typography } from "@mui/material";
import axios from "axios";
import Output from "./Output";

const Error = styled(Typography)`
  background-color: red;
  color: #fff;
  padding: 10px;
  width: 50%;
`;

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 10px;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111;
  }
  & > div > input[type="number"] {
    border-bottom: 1px solid #111;
  }
`;

function InputBox() {
  const [imgName, setImgName] = useState("");
  const [imgNum, setImgNum] = useState(20);
  const [allimg, setAllImg] = useState([]);
  const [error, setError] = useState(false);
  const API = process.env.REACT_APP_IMAGE;
  const SubmitEvent = () => {
    if (imgNum < 3 || imgNum > 200) {
      setError(true);
    } else {
      axios
        .get(
          `https://pixabay.com/api/?key=${API}&q=${imgName}&image_type=photo&per_page=${imgNum}`
        )
        .then((res) => {
          // console.log(res.data.hits);
          setAllImg(res.data.hits);
        })
        .then((error) => {
          console.log(error);
        });
      setError(false);
    }
    setImgName("");
  };
  return (
    <>
      <Container>
        <InputBase
          placeholder="Enter image name"
          type="text"
          value={imgName}
          onChange={(e) => setImgName(e.target.value)}
          required
        />
        <InputBase
          placeholder="Enter how many image"
          type="number"
          onChange={(e) => setImgNum(e.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => SubmitEvent()}
        >
          Submit
        </Button>
      </Container>
      {error && <Error>insufficient number plz write between 3 to 200</Error>}
      <Output allimg={allimg} />
    </>
  );
}

export default InputBox;
