import React, { useEffect, useState } from "react";
import { InputBase, Button, Box, styled, Typography } from "@mui/material";
import axios from "axios";
import Output from "./Output";
import Footer from "./Footer";
import PagiNation from "./PagiNation";

const Error = styled(Typography)`
  background-color: red;
  color: #fff;
  padding: 10px;
  width: 50%;
`;

const Container = styled(Box)`
  margin-top: 60px;
  & > * {
    margin: 20px 20px 20px 10px;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid white;
    color: white;
  }
  & > div > input[type="number"] {
    border-bottom: 1px solid white;
    color: white;
    -moz-appearance: textfield;
  }
  & > div > input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

function InputBox() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [imgName, setImgName] = useState("india");
  const [imgNum, setImgNum] = useState(15);
  const [allimg, setAllImg] = useState([]);
  const [error, setError] = useState(false);
  const API = process.env.REACT_APP_IMAGE;
  const recordsPerPage = 15;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = allimg.slice(firstIndex, lastIndex);
  const npage = Math.ceil(allimg.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);
  const apiCall = () => {
    setTimeout(() => {
      axios
        .get(
          `https://pixabay.com/api/?key=${API}&q=${imgName}&image_type=photo&per_page=${imgNum}`
        )
        .then((res) => {
          setAllImg(res.data.hits);
        })
        .then((error) => {
          console.log(error);
        });
      setError(false);
      setIsLoading(false);
    }, 2000);
  };
  const SubmitEvent = () => {
    setShow(true);
    setIsLoading(true);
    if (imgNum < 3 || imgNum > 100) {
      setError(true);
    } else {
      apiCall();
    }
  };

  useEffect(() => {
    SubmitEvent(); // eslint-disable-next-line
  }, []);
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
          value={imgNum}
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
      {error && <Error>insufficient number plz write between 3 to 100</Error>}
      {show && <Output records={records} isLoading={isLoading} />}
      <PagiNation
        number={number}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        npage={npage}
      />
      <Footer />
    </>
  );
}

export default InputBox;
