import React from 'react'
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillAmazonCircle, AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>Techystar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                we are your one and only solution to the tech problems you face every day. We 
                are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
            <h1>Who are we?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ipsam non numquam deleniti, 
                odio pariatur quae ea itaque dolore accusantium similique reiciendis aut maxime iste cum esse
                 magni, quasi animi!
            </p>
        </div>
    </div>

    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay: ".25s"}}>
                    <AiFillAmazonCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay: ".5s"}}>
                    <AiFillYoutube/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay: ".75s"}}>
                    <AiFillInstagram/>
                    <p>Google</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home