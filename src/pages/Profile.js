import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import PostDialog from "./PostDialog";

// 포스트 목록
const posts = [
  {
    postId: 1,
    postText: "리액트 공부중…",
    image:
      "https://velog.velcdn.com/images/dooooh2/post/e03d49ee-8c38-4195-ae3e-1ca6668d9581/image.png",
  },
  {
    postId: 2,
    postText: "마라탕먹고싶다",
    image: "https://www.foodjang.com/New/05/221806880/221806880_b_1.jpg",
  },
  {
    postId: 3,
    postText: "오늘은 뭐하지",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2018/07/bulletproof-coffee-recipe-5-of-9.jpg",
  },
];
// 스타일드 컴포넌트를 사용하여 스타일 지정
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProfileImage = styled.img`
  width: 150px; /* 변경된 이미지 크기 */
  height: 150px; /* 변경된 이미지 크기 */
  border-radius: 50%;
  margin-right: 20px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 1000px;
  max-width: 100%;
  margin-top: 20px;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
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

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState(null);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const user = {
    ProfileImage: "https://upload.wikimedia.org/wikipedia/commons/0/09/HGU-Emblem-eng2.png",
    username: "HGU_2024_Instagram",
    fullName: "한동인",
    followers: 100,
    following: 50,
    posts: posts.length,
    bio: "안녕 내이름을 소개하지",
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
              <p>게시글       <strong>{user.posts}</strong></p>
            </StatisticItem>
              <StatisticItem>
              <p>팔로워       <strong>{user.followers}</strong></p>
                
              </StatisticItem>
              <StatisticItem>
              <p>팔로잉       <strong>{user.following}</strong></p>
              </StatisticItem>
              
            </UserStats>
            <p>{user.bio}</p>
          </ProfileInfo>
          
        </ProfileHeader>

        <Divider />
        

        <Grid>
          {posts.map((post) => (
            <Item key={post.postId}>
              <img
                src={post.image}
                alt={post.postText}
                onClick={() => {
                  setPost(post);
                  setIsOpen(true);
                }}
              />
              <p>{post.postText}</p>
            </Item>
          ))}
        </Grid>
      </Container>

      {isOpen && (
        <PostDialog open={isOpen} onClose={handleCloseDialog} post={post} />
      )}
    </>
  );
}

