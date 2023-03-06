import React from "react";
import { Box, styled } from "@mui/material";
import { FcPrevious, FcNext } from "react-icons/fc";
const Pagination = styled(Box)`
  & > * {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  & > ul {
    list-style: none;
  }
  & > ul > li > a {
    text-decoration: none;
  }
`;
function PagiNation({ currentPage, number, setCurrentPage, npage }) {
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <Pagination>
      <ul>
        <li>
          <a href="#1" rel="noreferrer" onClick={() => prePage()}>
            <FcPrevious size={20} />
          </a>
        </li>
        {number.map((n, i) => (
          <li key={i} className="list-item">
            <button
              className={`btn ${currentPage === n ? `active` : ``}`}
              onClick={() => changeCPage(n)}
            >
              {n}
            </button>
          </li>
        ))}
        <li>
          <a href="#2" rel="noreferrer" onClick={() => nextPage()}>
            <FcNext size={20} />
          </a>
        </li>
      </ul>
    </Pagination>
  );
}

export default PagiNation;
