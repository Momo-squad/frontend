import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import FileUpload from './FileUpload';
import TextField from '@mui/material/TextField';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {useState, useRef, useLayoutEffect} from 'react'

const MIN_TEXTAREA_HEIGHT = 32;

export default function CreatePost() {
  const [open, setOpen] = useState(false);
  const [postDescription, setPostDescription] = useState("")
  const [keywords, setKeywords] = useState("")
  const [image, setImage] = useState([])

  const [post, setPost] = useState(null)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const textAreaRef = React.useRef(null);

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    if (textAreaRef.current !== null){
      textAreaRef.current.style.height = "inherit";
      // Set height
      textAreaRef.current.style.height = `${Math.max(
        textAreaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [postDescription]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImage([])
  };

  const handleCreatePost = (e) => {
    if (!postDescription || !keywords){
      toast.error("Descritpion and keywords not present")
    } else {
      let postData = {
        created_at: new Date(),
        created_by: "",
        description: postDescription,
        keywords: keywords.split("#").map(i=>i.trim()).filter(i=>i),
        images: image
      };
  
      setPost(postData)
      toast.success("Added new post")
      console.log(postData)
      setKeywords("")
      setPostDescription("")
      setImage([])

      setOpen(false)
    }
  }

  return (
    <>
    <div className='create-post'>
    <span className="user-img">
        <img src="https://scontent.fbir4-1.fna.fbcdn.net/v/t39.30808-6/318499336_969462414459076_3592138521682688925_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oCBoVqye2JgAX8NPx5a&_nc_ht=scontent.fbir4-1.fna&oh=00_AfAPk9Wa_8_6QhFbmOCt8UQ8o06_U6vBBlWE9_hs5Hlb4g&oe=63C778AF" alt="pp" />
    </span>
    <span className="input-field">
        <input
        onClick={handleClickOpen}
        type="text" 
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        placeholder="Share something new"/>
    </span>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Create a new post"}
        </DialogTitle>
        <DialogContent>
              <textarea
              ref={textAreaRef}
              value={postDescription} 
              onChange={e => setPostDescription(e.target.value)} 
              style={{
                minHeight: MIN_TEXTAREA_HEIGHT,
                resize: "none"
              }}
              placeholder='Write something that matters..'/>

              <p className='label'>Keywords</p>
              <TextField
              className='keywords'
              value={keywords} 
              onChange={e => setKeywords(e.target.value)} 
              label="# followed by keyword"
              variant="outlined" />
              {/* <textarea
              className='keywords'
              value={keywords} 
              style={{
                resize: "none"
              }}
              onChange={e => setKeywords(e.target.value)} 
              placeholder='write keywords using # followed by keyword'/> */}
            <FileUpload image={image} setImage={setImage}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button className='btn bg-dark text-white px-4' onClick={handleCreatePost} autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    <ToastContainer />
    </>
  );
}