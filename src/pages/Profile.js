import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextsmsIcon from "@mui/icons-material/Textsms";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Addpost from "./Addpost";
import PostDialog from "./PostDialog";

// 스타일드 컴포넌트를 사용하여 스타일 지정
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 0 20px; */

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
const ProfileImage = styled.img`
  width: 150px; /* 변경된 이미지 크기 */
  height: 150px; /* 변경된 이미지 크기 */
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserStats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// 이미지 버튼 스타일링을 하는 것 입니다. 추후 변경 예정입니다.

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 950px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

const Item = styled.div`
  width: 100%;
  max-width: 300px;
  height: 100%;
  //margin: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-square: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #ccc;
  margin: 20px 0;
  width: 100%;
`;

const Statistics = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const StatisticItem = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 0.7;
  }

  &:hover div {
    display: flex;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  p {
    color: white !important;
  }

  &:hover {
    display: flex;
  }

  @media (max-width: 768px) {
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

// axios로 front-back 연결하기
// userId로 post 불러오기.
const Posts = ({ userId, setPostsData }) => {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/post/readbyid/${userId}`
        );
        setPostsData(response.data); // 부모 컴포넌트로 데이터 전달
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPosts();
  }, [userId, setPostsData]);
};

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [postsData, setPostsData] = useState([]);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const user = {
    ProfileImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/HGU-Emblem-eng2.png",
    username: "HGU_2024_Instagram",
    fullName: "한동인",
    followers: 100,
    following: 50,
    Posts: Posts.length,
    bio: "안녕 내이름을 소개하지",
    userId: 4,
  };

  const addPost = (newPostData) => {
    axios
      .post("http://localhost:8080/post/create", {
        ...newPostData,
        userId: user.userId, // Profile.js에서 정의된 user의 userId 사용
      })
      .then((response) => {
        console.log("Post created successfully:", response.data);
        // 포스트 생성 후 필요한 동작, 예를 들어 포스트 목록 업데이트 등
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Instagram</title>
      </Helmet>

      <Container>
        <TopBar>
          <div>Instagram Clone Coding</div>
          <div>
            <Addpost addPost={addPost} />
            <Button>프로필</Button>
            <Button>보관된 스토리 보기</Button>
            <Button>⚙️</Button>
          </div>
        </TopBar>

        <ProfileHeader>
          <ProfileImage src={user.ProfileImage} alt="Profile" />
          <ProfileInfo>
            <UserInfo>
              <h2>{user.username}</h2>
            </UserInfo>
            <UserStats>
              <StatisticItem>
                <p>
                  게시글 <strong>{user.posts}</strong>
                </p>
              </StatisticItem>
              <StatisticItem>
                <p>
                  팔로워 <strong>{user.followers}</strong>
                </p>
              </StatisticItem>
              <StatisticItem>
                <p>
                  팔로잉 <strong>{user.following}</strong>
                </p>
              </StatisticItem>
            </UserStats>
            <p>{user.bio}</p>
          </ProfileInfo>
        </ProfileHeader>

        <Divider />

        <Grid>
          <Posts userId={user.userId} setPostsData={setPostsData} />
          {postsData.map((post) => (
            <div
              key={post.postId}
              style={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "0px",
                paddingTop: "0px",
                position: "relative",
              }}
            >
              <Item key={post.postId}>
                <ImageContainer>
                  <img
                    src={post.postImage}
                    alt={post.postText}
                    onClick={() => {
                      setPost(post);
                      setIsOpen(true);
                    }}
                  />
                  <Overlay
                    onClick={() => {
                      setPost(post);
                      setIsOpen(true);
                    }}
                  >
                    <p style={{ display: "flex", flexDirection: "row" }}>
                      <span
                        style={{
                          marginRight: "20px",
                        }}
                      >
                        <FavoriteBorderIcon color="inherit" />
                        {post.postLike}
                      </span>
                      <span>
                        <TextsmsIcon color="inherit" />
                        {post.postText}
                      </span>
                    </p>
                  </Overlay>
                </ImageContainer>
              </Item>
            </div>
          ))}
        </Grid>
      </Container>

      {isOpen && (
        <PostDialog open={isOpen} onClose={handleCloseDialog} post={post} />
      )}
    </>
  );
}
