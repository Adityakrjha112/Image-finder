import React from "react";
import { Box, styled } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Container = styled(Box)`
  background: rgb(10, 25, 41);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: small;
`;
const Left = styled(Box)`
  display: flex;
  margin-left: 10px;
`;
const Right = styled(Box)`
  display: flex;
  gap: 10px;
  margin-right: 20px;
`;
const Icon = styled("a")`
  color: rgb(90, 19, 156);
`;
function Footer() {
  return (
    <>
      <Container>
        <Left>
          <p style={{ color: "rgb(90, 19, 156)" }}>
            2023 ImageFinder. All right reserved.
          </p>
        </Left>
        <Right>
          <p>
            <Icon
              href="https://www.linkedin.com/in/strangercoder/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
            </Icon>
          </p>
          <p>
            <Icon
              href="https://github.com/Adityakrjha112/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </Icon>
          </p>
          <p>
            <Icon
              href="https://www.instagram.com/adityajha_112/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsInstagram size={20} />
            </Icon>
          </p>
        </Right>
      </Container>
    </>
  );
}

export default Footer;
