import React from 'react';
import Title from '../utilities/Title';
import profilePicture from '../assets/profile.png';
import lineSvg from '../assets/Line.svg'; 

const Header = () => {
    return (
        <header className='header'>
            <main>
                <div className="container flex content-center items-center justify-between  px-3 pt-8 pb-3">
                    <Title tag={`1`} text={`café du savoir`} />
                    <div className='w-14 h-14'>
                        <img src={profilePicture} alt="profile-picture" />
                    </div>
                </div>
                <img src={lineSvg} alt="line-svg" />
            </main>
        </header>
    );
};

export default Header;  