import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg';
import '../Styles/HomeStyle.css'
const Home = () => {
  return (
    <div>
        <Layout>
            <div className="home" style={{backgroundImage: `url(${Banner})`}}>
              <div className="headerContainer">
                <h1>Food Website</h1>
                <p>Best Food In India</p>
                <Link to={'/menu'}>
                <button>Order Now</button>
                </Link>
              </div>
            </div>
        </Layout>
    </div>
  )
}

export default Home