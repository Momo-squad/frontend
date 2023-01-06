import { useRef } from "react";
import "../styles/Feed.css"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

import { useState } from "react"
const handlePostsFetch = () => {
        // do posts fetch here
}

export const Feed = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [following, setFollowing] = useState(false);
    const hasImage = true;
    const postUpvoteCount = 10;

    const showModal = () => setIsOpen(true);
    const hideModal = () => setIsOpen(false);
    const FormModal = () => new Modal('#myModal', options)

    const handleFollow = () => {
        setFollowing(!following)
    }   

    const handleCommentSubmit = () => {
        //do sth here
    }

    const handleUpvoteClick = (e) => {
        const icon = e.target;
        const elem = e.target.parentElement;
        const downVoteElem = elem.parentElement.children[2];
        const downVoteIcon = downVoteElem.children[0]
        
        if (downVoteElem.className == ""){
            if (elem.className == "" && downVoteElem.className == ""){
                downVoteElem.classList.toggle("inactive");
                downVoteIcon.classList.remove("bi-arrow-down-square-fill")
                downVoteIcon.classList.add("bi-arrow-down-square")

                elem.classList.toggle("inactive")
                icon.classList.remove("bi-arrow-up-square")
                icon.classList.add("bi-arrow-up-square-fill")
            } else {
                downVoteElem.classList.toggle("inactive");
                downVoteIcon.classList.add("bi-arrow-down-square-fill")
                downVoteIcon.classList.remove("bi-arrow-down-square")

                elem.classList.toggle("inactive")
                icon.classList.remove("bi-arrow-up-square-fill")
                icon.classList.add("bi-arrow-up-square")
            }
        } else {
            downVoteElem.classList.toggle("inactive");
            downVoteIcon.classList.remove("bi-arrow-down-square-fill")
            downVoteIcon.classList.add("bi-arrow-down-square")
            elem.classList.toggle("inactive")
            icon.classList.remove("bi-arrow-up-square-fill")
            icon.classList.add("bi-arrow-up-square")
            console.log("already downvoted")
        }
    }

    const handleDownvoteClick = (e) => {
        const icon = e.target;
        const elem = e.target.parentElement;
        const upVoteElem = elem.parentElement.children[0];
        const upVoteIcon = upVoteElem.children[0]
        
        if (upVoteElem.className == ""){
            if (elem.className == "inactive"){
                upVoteElem.classList.toggle("inactive");
                upVoteIcon.classList.remove("bi-arrow-up-square-fill")
                upVoteIcon.classList.add("bi-arrow-up-square")

                elem.classList.toggle("inactive")
                icon.classList.remove("bi-arrow-downn-square-fill")
                icon.classList.add("bi-arrow-down-square")
            } else {
                upVoteElem.classList.toggle("inactive");
                upVoteIcon.classList.remove("bi-arrow-up-square-fill")
                upVoteIcon.classList.add("bi-arrow-up-square")

                elem.classList.toggle("inactive")
                icon.classList.remove("bi-arrow-down-square")
                icon.classList.add("bi-arrow-down-square-fill")
            }
        } else {
            upVoteElem.classList.toggle("inactive");
            upVoteIcon.classList.remove("bi-arrow-up-square-fill")
            upVoteIcon.classList.add("bi-arrow-up-square")
            elem.classList.toggle("inactive")
            icon.classList.remove("bi-arrow-down-square")
            icon.classList.add("bi-arrow-down-square-fill")
            console.log("already upvoted")
        }
    }

    const handleCommentSection = (e) => {
        const parentDiv = e.target.parentElement.parentElement.parentElement.id;
        console.log(parentDiv)
    }

    return (
        <>
        <div className="feed">
            <div className="create-post">
                <span className="user-img">
                    <img src="https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/318499336_969462414459076_3592138521682688925_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=deXb1cmmirkAX9rGgbq&_nc_ht=scontent-lcy1-2.xx&oh=00_AfDN1X9pL9MdcIFm6ti4wjSxcyc_cW5dNh-TQKqL9PXnrA&oe=63BB9B2F" alt="pp" />
                </span>
                <span className="input-field">
                    <input
                    type="text" 
                    onFocus={() => showModal()}
                    placeholder="Share something new"/>
                </span>
            </div>
            
            <div className="feed-posts">
                <div className="post" id="1">
                    <div className="post-counts">
                        <button
                        className=""
                        onClick={handleUpvoteClick}>
                            <i className="bi bi-arrow-up-square"></i>
                        </button>
                        <span>{postUpvoteCount}</span>
                        <button
                        className=""
                        onClick={handleDownvoteClick}>
                            <i className="bi bi-arrow-down-square"></i>
                        </button>
                    </div>
                    <div className="post-data-container">
                        <div className="author">
                            <span className="author-img">
                                <img src="https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/318499336_969462414459076_3592138521682688925_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=deXb1cmmirkAX9rGgbq&_nc_ht=scontent-lcy1-2.xx&oh=00_AfDN1X9pL9MdcIFm6ti4wjSxcyc_cW5dNh-TQKqL9PXnrA&oe=63BB9B2F" alt="pp" />
                            </span>
                            <span className="author-name">Bibek Shah</span>
                            <span className="follow-btn-container">
                                {
                                    following === false ?
                                    <button
                                    className="follow-btn"
                                    onClick={handleFollow}
                                    >Follow</button>
                                    : 
                                    <button
                                    className="unfollow-btn"
                                    onClick={handleFollow}
                                    >Unfollow</button>
                                }
                            </span>
                        </div>
                        <div className="author-keywords">
                            <span className="keyword">Farming</span>
                            <span className="keyword">Agriculture</span>
                            <span className="keyword">Paddy</span>
                        </div>
                        <div className="author-post">
                            <p className="description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quia incidunt distinctio maiores facere modi,
                                dolore repudiandae velit! Dignissimos inventore aliquid, quisquam obcaecati incidunt maxime.
                                Accusamus ducimus sequi earum impedit.
                            </p>
                            {
                                hasImage === false
                                ? <></>
                                : 
                                <div className="author-post-image">
                                    <img src="https://diaryofdennis.files.wordpress.com/2015/08/random-plant-photo.jpg" alt="image" />
                                </div>
                            }
                        </div>
                        <div className="below-posts">
                            <div className="post-btns">
                                <button
                                className="comment"
                                data-bs-toggle="collapse"
                                data-bs-target="#post-1">
                                    <i className="bi bi-chat-left-text"></i>
                                    Comment
                                </button>
                                <button className="share">
                                    <i className="bi bi-share"></i>
                                    Share
                                </button>
                            </div>
                            
                            <div className="content-box-wrapper">
                                <div className="collapse" id="post-1">
                                    <div className="comment-box">
                                        <div className="create-comment-wrapper">
                                            <span className="author-img">
                                                <img src="https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/318499336_969462414459076_3592138521682688925_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=deXb1cmmirkAX9rGgbq&_nc_ht=scontent-lcy1-2.xx&oh=00_AfDN1X9pL9MdcIFm6ti4wjSxcyc_cW5dNh-TQKqL9PXnrA&oe=63BB9B2F" alt="person" />
                                            </span>
                                            <span className="create-comment">
                                                <textarea placeholder="Write your comments here..."></textarea>
                                            </span>
                                            <span className="submit-comment">
                                                <button
                                                type="submit"
                                                onChange={handleCommentSubmit}>
                                                    <i className="bi bi-send"></i>
                                                </button>
                                            </span>
                                        </div>
                                        <div className="comment-header">
                                            <div className="dropdown options">
                                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                    Sort by
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Relevance</a></li>
                                                    <li><a class="dropdown-item" href="#">Newest</a></li>
                                                </ul>
                                            </div>
                                            <div className="text-muted totalComments">24 comments</div>
                                        </div>
                                        <div className="comments">
                                            <div className="comment">
                                                <span className="commenter-img">
                                                    <img src="https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/318499336_969462414459076_3592138521682688925_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=deXb1cmmirkAX9rGgbq&_nc_ht=scontent-lcy1-2.xx&oh=00_AfDN1X9pL9MdcIFm6ti4wjSxcyc_cW5dNh-TQKqL9PXnrA&oe=63BB9B2F" alt="person" />
                                                </span>
                                                <span className="text">
                                                    <small className="commented-date">8 months ago</small>
                                                    <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet excepturi aliquid quas recusandae? Quidem accusantium</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post" id="2">
                    <div className="post-counts">
                        <button
                        className=""
                        onClick={handleUpvoteClick}>
                            <i className="bi bi-arrow-up-square"></i>
                        </button>
                        <span>{postUpvoteCount}</span>
                        <button 
                        className=""
                        onClick={handleDownvoteClick}>
                            <i className="bi bi-arrow-down-square"></i>
                        </button>
                    </div>
                    <div className="post-data-container">
                        <div className="author">
                            <span className="author-img">
                                <img src="https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/318499336_969462414459076_3592138521682688925_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=deXb1cmmirkAX9rGgbq&_nc_ht=scontent-lcy1-2.xx&oh=00_AfDN1X9pL9MdcIFm6ti4wjSxcyc_cW5dNh-TQKqL9PXnrA&oe=63BB9B2F" alt="pp" />
                            </span>
                            <span className="author-name">Bibek Shah</span>
                            <span className="follow-btn-container">
                                {
                                    following === false ?
                                    <button
                                    className="follow-btn"
                                    onClick={handleFollow}
                                    >Follow</button>
                                    : 
                                    <button
                                    className="unfollow-btn"
                                    onClick={handleFollow}
                                    >Unfollow</button>
                                }
                            </span>
                        </div>
                        <div className="author-keywords">
                            <span className="keyword">Farming</span>
                            <span className="keyword">Agriculture</span>
                            <span className="keyword">Paddy</span>
                        </div>
                        <div className="author-post">
                            <p className="description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quia incidunt distinctio maiores facere modi,
                                dolore repudiandae velit! Dignissimos inventore aliquid, quisquam obcaecati incidunt maxime.
                                Accusamus ducimus sequi earum impedit.
                            </p>
                            {
                                hasImage === false
                                ? <></>
                                : 
                                <div className="author-post-image">
                                    <img src="https://diaryofdennis.files.wordpress.com/2015/08/random-plant-photo.jpg" alt="image" />
                                </div>
                            }
                        </div>
                        <div className="post-btns">
                            <button
                            className="comment"
                            onClick={handleCommentSection}>
                                <i className="bi bi-chat-left-text"></i>
                                Comment
                            </button>
                            <button
                            className="share"
                            onClick={handleCommentSection}>
                                <i className="bi bi-send"></i>
                                Share
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Create post modal */}
            {/* <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <button variant="secondary" onClick={hideModal}>Close</button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal> */}
        </div>
        </>
    )
}