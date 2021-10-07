import React from 'react';

const Home = () => {

    const hero = "https://images.unsplash.com/photo-1621168322270-3f6eb18f5fea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"

    return (
        <div className="Home">
            <div className="title">
                <h6>Foundation</h6>
                <h3>
                    Explore Rare<br />
                    Digital Arts &<br />
                    Collect NFT
                </h3>
                <button className="btn">Explore</button>
            </div>
            <div className="container">
                <img src={hero} alt="hero"/>
            </div>
        </div>
    )
}

export default Home
