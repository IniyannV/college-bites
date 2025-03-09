import React from 'react'
import "./information.css"
const Information = () => {
  return (
    <>
    <div className="info-opening">
        <a href = '/'>
        <div className = 'menuBar'>
        <div className="logo">
            <span className="logo-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 85 84" fill="none">
                <path d="M21.25 66.5V70C21.25 70.9917 20.9106 71.8229 20.2318 72.4937C19.553 73.1646 18.7118 73.5 17.7083 73.5H14.1667C13.1632 73.5 12.322 73.1646 11.6432 72.4937C10.9644 71.8229 10.625 70.9917 10.625 70V42L18.0625 21C18.4167 19.95 19.0512 19.1042 19.9661 18.4625C20.8811 17.8208 21.8993 17.5 23.0208 17.5H31.875V10.5H53.125V17.5H61.9792C63.1007 17.5 64.1189 17.8208 65.0339 18.4625C65.9488 19.1042 66.5833 19.95 66.9375 21L74.375 42V70C74.375 70.9917 74.0356 71.8229 73.3568 72.4937C72.6779 73.1646 71.8368 73.5 70.8333 73.5H67.2917C66.2882 73.5 65.447 73.1646 64.7682 72.4937C64.0894 71.8229 63.75 70.9917 63.75 70V66.5H21.25ZM20.5417 35H64.4583L60.7396 24.5H24.2604L20.5417 35ZM26.5625 56C28.0382 56 29.2925 55.4896 30.3255 54.4688C31.3585 53.4479 31.875 52.2083 31.875 50.75C31.875 49.2917 31.3585 48.0521 30.3255 47.0312C29.2925 46.0104 28.0382 45.5 26.5625 45.5C25.0868 45.5 23.8325 46.0104 22.7995 47.0312C21.7665 48.0521 21.25 49.2917 21.25 50.75C21.25 52.2083 21.7665 53.4479 22.7995 54.4688C23.8325 55.4896 25.0868 56 26.5625 56ZM58.4375 56C59.9132 56 61.1675 55.4896 62.2005 54.4688C63.2335 53.4479 63.75 52.2083 63.75 50.75C63.75 49.2917 63.2335 48.0521 62.2005 47.0312C61.1675 46.0104 59.9132 45.5 58.4375 45.5C56.9618 45.5 55.7075 46.0104 54.6745 47.0312C53.6415 48.0521 53.125 49.2917 53.125 50.75C53.125 52.2083 53.6415 53.4479 54.6745 54.4688C55.7075 55.4896 56.9618 56 58.4375 56ZM17.7083 59.5H67.2917V42H17.7083V59.5Z" fill="#D48427"/>
            </svg>
            College Bites
            <div className = 'menu aboutUs'>
                About Us
            </div>
            <div className = 'menu how'>
                How It Works
            </div>
            <div className = 'menu info'>
                Information
            </div>
            </span>
        </div>
        </div>
        </a>
        <h2 className="header">Share homemade love <br /> <span style={{ color: '#510104' }}>To your college doves</span></h2>
        <div className = 'btn customer'><span className = 'txt'>I am a customer</span></div>
        <a href='/driverPortal' ><div className = 'btn driver'><span className = 'txt'>I am a driver</span></div></a>
    </div>
    <div className="second">
        <h2 className = 'header about'>About <span style = {{color: '#E0BABB'}}>us</span></h2>
        <div className = 'help'>
        <h3>
            Helping College Students
        </h3>
        <p>
            A common challenge faced by parents of college students is the desire to send homemade food to their children without having to make the trip themselves. Our website aims to address this issue by leveraging community-based carpooling methods to facilitate the delivery of homemade meals. Through our platform, parents can connect with trusted community members who are already traveling to college towns, ensuring that food reaches students efficiently and safely.
        </p>
        </div>
    </div>
    <div className="third">
        <h2 className = 'header about'>How it <span style = {{color: '#E0BABB'}}>works</span></h2>
        <div className = 'help'>
        <h3>
            Helping College Students
        </h3>
        <p>
            A common challenge faced by parents of college students is the desire to send homemade food to their children without having to make the trip themselves. Our website aims to address this issue by leveraging community-based carpooling methods to facilitate the delivery of homemade meals. Through our platform, parents can connect with trusted community members who are already traveling to college towns, ensuring that food reaches students efficiently and safely.
        </p>
        </div>
    </div>
    </>
  )
}

export default Information