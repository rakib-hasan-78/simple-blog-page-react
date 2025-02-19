import React from 'react';

import coverImg from '../assets/2.png'
import profile from '../assets/profile.png'
import bookmark from '../assets/Vector.svg';
import line from '../assets/Line.svg'; 
import Title from '../utilities/Title';
import Text from '../utilities/Text';

const Blog = () => {
    return (

        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <div className='w-full'>
                <img src={coverImg} alt="" />
            </div>
            <div className='w-full py-5 px-2 flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12'>
                        <img src={profile} alt="" />
                    </div>
                    <div className='flex flex-col items-start space-y-1'>
                        <Title tag={`5`} text={`md raju`} />
                        <Text tag={`span`} text={`mar 14 (4 days ago)  `}/>
                    </div>
                </div>
                {/* bookmark*/}
                <div className='flex px-1 items-center xxs:flex-col xxs:space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3'>
                    <Text className={`text-sm`} tag={`span`} text={`05 min read`} />
                    <div className='w-4'>
                    <img src={bookmark} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-start p-3 pr-14 pb-5'>
                <Title className={`md:pr-24`} tag={`2`} text={`how to make changes to pursue a bter lifw e life is al.`}/>
            </div>
            {/* tags */}
            <div className='w-full py-4 flex items-center justify-start space-x-6 px-4 pb-4'>
                <Title tag={`6`} text={`#basic`} className={`lowercase`}/>
                <Title tag={`6`} text={`#basic`} className={`lowercase`}/>
            </div>
            <div className='w-full px-3 pb-10'>
                <a href="#">mark as read</a>
            </div>
            <div className='w-full pb-4'>
                <img src={line} alt="" className='' />
 
            </div>    
        </div>
    );
};

export default Blog;