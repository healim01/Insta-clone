import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosHeartEmpty, IoLogoInstagram } from "react-icons/io";
import { IoCompassOutline, IoPaperPlaneOutline, IoSearchOutline } from "react-icons/io5";
import { MdVideoSettings } from "react-icons/md";
import { PiUserCircleThin } from "react-icons/pi";
import { RiMenuLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Addpost from "../pages/Addpost";
// import MyProfileImg from "../img/myprofile.jpeg";
// import InstagramLogoImg from "../img/instagramLogo.png";




const Logo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 30px;
  gap: 10px;
`;

const PCSideBar = styled.div`
  width: 250px;
  height: 100%;
  padding-top: 40px;
  padding-left: 30px;
  border-right: thin solid gray;
`;
const NonPCSideBar = styled.div`
  width: 70px;
  height: 100%;
  padding-top: 40px;
  padding-left: 30px;
  border-right: thin solid gray;
`;
const IconStyle = {
  width: "23px",
  height: "23px",
  marginRight: "20px",
};

const Box = styled.div`
  padding: 20px;
`;

const IconTextContainer = styled.tr`
  display: flex;
  align-items: center;
  &:active {
    transform: scale(0.9); // 클릭 시 작은 크기로 축소되는 효과
  }
`;

const CssTaskButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
`;


const SideBar = ({ setIsOpen }) => {
  const isPc = useMediaQuery({
    query: "(min-width:1300px)",
  });

  const nonPC = useMediaQuery({
    query: "(max-width:1299px)",
  });

  return (
    <>
      {isPc && (
        <PCSideBar>
          <Logo>
            <SiInstagram />
            Instagram
          </Logo>
          <Box />
          <table style={{ width: "250px" }}>
            <IconTextContainer>
              <GrHomeRounded style={IconStyle} />홈
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <IoSearchOutline style={IconStyle} />
              검색
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <IoCompassOutline style={IconStyle} />
              탐색 탭
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <MdVideoSettings style={IconStyle} />
              릴스
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <IoPaperPlaneOutline style={IconStyle} />
              메시지
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <IoIosHeartEmpty style={IconStyle} />
              알림
            </IconTextContainer>
            <Box />
            
            <IconTextContainer>
            <Addpost onClick={() => setIsOpen(true)}>
                <BsPlusSquare style={IconStyle} />
              </Addpost>
              게시물 추가
            </IconTextContainer>
            <Box />
            <IconTextContainer style={{ fontWeight: "bold" }}>
              <div
                style={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginRight: "15px",
                }}
              >
                <PiUserCircleThin style={IconStyle} />
              </div>
              프로필
            </IconTextContainer>
            <Box style={{ height: "100px" }} />
            <IconTextContainer>
              <RiMenuLine style={IconStyle} /> 더 보기{" "}
            </IconTextContainer>
          </table>
        </PCSideBar>
      )}
      {nonPC && (
        <NonPCSideBar>
          <IoLogoInstagram
            style={{ width: "30px", height: "30px", marginRight: "20px" }}
          />
          <Box />
          <table style={{ width: "70px" }}>
            <IconTextContainer>
              <GrHomeRounded style={IconStyle} />
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <IoSearchOutline style={IconStyle} />
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <IoCompassOutline style={IconStyle} />
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <MdVideoSettings style={IconStyle} />
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <IoPaperPlaneOutline style={IconStyle} />
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <IoIosHeartEmpty style={IconStyle} />
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <BsPlusSquare style={IconStyle} />
            </IconTextContainer>
            <Box />
            <IconTextContainer>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <PiUserCircleThin style={IconStyle} />
              </div>
            </IconTextContainer>
            <Box style={{ height: "100px" }} />
            <IconTextContainer>
              <RiMenuLine style={IconStyle} />
            </IconTextContainer>
          </table>
        </NonPCSideBar>
      )}
    </>
  );
};
export default SideBar;
