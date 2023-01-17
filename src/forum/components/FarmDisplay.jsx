import "../styles/FarmDisplay.css"

export const FarmDisplay = () => {
    return (
        <div className="farm-display">
            <div className="encourage">
                <label htmlFor="#">Farmap Community</label>
                <p class="en-message mx-auto text-muted">Create, share and learn from the unlimited notes, photos and videos and ask your questions, answer your friends all over the world and grow. Create, share and learn.</p>
                <div class="actions">
                    <button class="mx-auto mb-2">Join Community, it's free!</button>
                    <button class="mx-auto">Watch about Farmap</button>
                </div>
            </div>
            <label htmlFor="#" className="suggestions-label">Suggestions</label>
            <div className="friends-suggestion">
                <div className="user">
                    <div className="left">
                        <div class="user-avatar">
                            <img src="https://i.stack.imgur.com/5Kgaq.jpg?s=192&g=1" />
                        </div>
                        <div class="user-info">
                            <span class="name">Bibek Shah</span>
                            <span class="role text-muted">Seller</span>
                        </div>
                    </div>
                    <div class="options right">
                        <button class="follow-btn">Follow</button>
                    </div>
                </div>
                <div className="user">
                    <div className="left">
                        <div class="user-avatar">
                            <img src="//s3.amazonaws.com/bucketeer-6a6b5dd7-82e9-48dd-b3be-ec23fe6cc180/users/avatars/000/000/001/medium/presenting_I.png?1664763020" />
                        </div>
                        <div class="user-info">
                            <span class="name">Yaman Sarabariya</span>
                            <span class="role text-muted">Farmer</span>
                        </div>
                    </div>
                    <div class="options right">
                        <button class="follow-btn">Follow</button>
                    </div>
                </div>
                <div className="user">
                    <div className="left">
                        <div class="user-avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGY7hEAIBV9_PWjpbY8Ufx_XIHR6zP_zqUbozsFurx6veVKqL3KLj5Gt8wl04OME7FKA&usqp=CAU" />
                        </div>
                        <div class="user-info">
                            <span class="name">Prabesh Shrestha</span>
                            <span class="role text-muted">Farmer</span>
                        </div>
                    </div>
                    <div class="options right">
                        <button class="follow-btn">Follow</button>
                    </div>
                </div>
                <div className="user">
                    <div className="left">
                        <div class="user-avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX9qBxst5evuOaVeYKH28O09mwfzN_yeSsOnHYqnnvjgeygbwU-b9N0Oj2dF6zWncAcI&usqp=CAU" />
                        </div>
                        <div class="user-info">
                            <span class="name">Bibek Bhatt</span>
                            <span class="role text-muted">Seller</span>
                        </div>
                    </div>
                    <div class="options right">
                        <button class="follow-btn">Follow</button>
                    </div>
                </div>
            </div>
        </div>      
    )
}
