import "../styles/Feed.css"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

import { useState } from "react"

export const Feed = () => {
    const [isOpen, setIsOpen] = useState(false)

    const showModal = () => setIsOpen(true);
    const hideModal = () => setIsOpen(false);

    const FormModal = () => new Modal('#myModal', options)

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