import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import PlusImage from '../icon/Plus.png';

const AddPostButton = styled(IconButton)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:active {
    transform: scale(0.9); // 클릭 시 작은 크기로 축소되는 효과
  }
`;

const PreviewImage = styled('img')`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  cursor: pointer; /* 미리보기 이미지에 커서를 추가하여 클릭 가능하도록 합니다. */
`;

const StyledDivider = styled(Divider)`
  margin: 10px 0;
`;

const Addpost = ({ addPost }) => {
  const [open, setOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [fileInput, setFileInput] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
      };
      reader.readAsDataURL(file);
    }

    // 이미지가 선택되면 file input을 null로 설정하여 "사진 선택" 버튼이 해당 사진으로 변경되도록 합니다.
    setFileInput(null);
  };

  const handleAddPost = () => {
    addPost({ postText, imageURL });
    setOpen(false);
    setPostText("");
    setImageURL("");
  };

  const handlePreviewImageClick = () => {
    // 이미지를 클릭하면 파일 선택을 다시 할 수 있도록 input을 클릭합니다.
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <>
      {/* 버튼 사진 보여주는 것 변경 금지 */}
      <AddPostButton onClick={handleClickOpen}>
        <img src={PlusImage} alt="" />
        
      </AddPostButton>

      {/* 버튼의 기능 하나하나 구현 */}
      <Dialog open={open} onClose={handleClose} sx={{ m: 0, p: 2 }}>
        <DialogActions sx={{ justifyContent: 'space-between' }}>
          <Button onClick={handleClose} sx={{ color: 'black' }}>뒤로가기</Button>
          <DialogTitle sx={{ textAlign: 'center' }}>새 게시물 만들기</DialogTitle>
          <Button onClick={handleAddPost} sx={{ color: 'lightblue' }}>공유하기</Button>
        </DialogActions>
        <Divider />
        <DialogContent>
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
    {/* 미리보기 이미지 */}
    {imageURL && (
      <PreviewImage
        src={imageURL}
        alt="Preview"
        style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={handlePreviewImageClick}
      />
    )}
    
    {/* Divider 추가 */}
    <StyledDivider />

    {/* 사진 선택과 버튼을 감싸는 div */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <label>
        {/* 사진 선택 버튼 */}
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={(input) => setFileInput(input)}
          onChange={handleImageChange}
        />
        {!imageURL && (
          <Button
            variant="outlined"
            component="span"
            onClick={() => fileInput.click()}
            style={{ minWidth: '100px', padding: '10px' }}
          >
            사진 선택
          </Button>
        )}
      </label>
    </div>

    {/* 텍스트 입력 창 */}
    <TextField
      multiline
      rows={4}
      margin="dense"
      label="게시물 텍스트"
      fullWidth
      value={postText}
      onChange={(e) => setPostText(e.target.value)}
    />
  </div>
</DialogContent>
      </Dialog>
    </>
  );
};

export default Addpost;
