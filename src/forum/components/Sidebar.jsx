import "../styles/Sidebar.css"

export const Sidebar = () => {
    const newFollowingPosts = 4;

    return (
        <div className="home-sidebar">
            <div className="feed-sort-btns">
                <button className="item" id="newest">
                    <i className="bi bi-asterisk"></i>
                    <span>
                        Newest and Recent
                        <small className="text-muted">Find the lastest update</small>
                    </span>
                </button>
                <button className="item" id="popular">
                    <i className="bi bi-bookmark-star-fill"></i>
                    <span>
                        Popular of the day
                        <small className="text-muted">Posts featured today</small>
                    </span>
                </button>
                <button className="item" id="followed">
                    <i className="bi bi-plus-square-fill"></i>
                    <span>
                        <span className="following-posts-badge-container">
                            Following 
                            <span class="badge text-bg-secondary">{newFollowingPosts}</span></span>
                        <small className="text-muted">Explored your favourites</small>
                    </span>
                </button>
            </div>

            <div className="feed-topics">
                <label htmlFor=".feed-topics" id="feed-topic-label">Popular Topics</label>
                <br />
                <button className="item topics-btn">#blockchain</button>
                <button className="item topics-btn">#farming</button>
                <button className="item topics-btn">#agriculture</button>
                <button className="item topics-btn">#harvesting</button>
                <button className="item topics-btn">#planting</button>
                <button className="item topics-btn">#terrace</button>
            </div>
        </div>
    )
}