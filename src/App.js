/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { SReset } from "./styles/reset";
import { Reset } from "styled-reset";
import { GSCommon } from "./styles/common";
import MainLayout from "./components/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import APage from "./pages/APage/APage";
import BPage from "./pages/BPage/BPage";
import { useState } from "react";

const SHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #777;
`;

const SContainer = css`
/* 좌우를 auto를 주게되면 flex를 사용하지않아도 자동으로 가운데정렬 */
  margin: 0px auto;
  width: 1170px;
  background-color: #bbb;
`;


function App() {
  const [ header, setHeader ] = useState("Header");

  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
      <div>
        <div css={SHeader}>{ header }</div>
        <div css={SContainer}>
          <Routes>
            <Route path="/a" element={<APage />} />
            {/* 다른위치에서 매개변수로 setHeader를 받으려면 정확하게 넘겨줘야함 */}
            <Route path="/b" element={<BPage setHeader={setHeader} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;