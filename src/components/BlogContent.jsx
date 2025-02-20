import React from 'react';
import bookmark from '../assets/Vector.svg';
import line from '../assets/Line.svg'; 
import Title from '../utilities/Title';
import Text from '../utilities/Text';
import PropTypes from 'prop-types';

const BlogContent = ({data, clickHandler}) => {
    const {
        cover,
        title,
        author,
        author_image,
        posted_date,
        reading_time,
        hash_tags =[]
    } = data;


    return (
        <div className='w-full h-auto flex flex-col items-center justify-center mb-10'>
                <div className='w-full'>
                    <img className='rounded-md' src={cover} alt={title} />
                </div>
                <div className='w-full py-5 px-2 flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-12 h-12'>
                            <img src={author_image} alt={author} />
                        </div>
                        <div className='flex flex-col items-start space-y-1'>
                            <Title tag={`5`} text={author} />
                            <Text tag={`span`} text={posted_date}/>
                        </div>
                    </div>
                    {/* bookmark*/}
                    <div className='flex px-1 items-center xxs:flex-col xxs:space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3'>
                        <Text  className={`text-sm`} tag={`span`} text={`${reading_time} min`} />
                        <div onClick={()=>clickHandler(title)} className='w-4 cursor-pointer'>
                        <img src={bookmark} alt="bookmark-button" />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-start p-3 pr-14 pb-5'>
                    <Title className={`md:pr-24`} tag={`2`} text={title}/>
                </div>
                {/* tags */}
                <div className='w-full py-4 flex items-center justify-start space-x-6 px-4 pb-4'>
                    <Title tag={`6`} text={ hash_tags.map(tag=>(
                    <span className='mr-2 text-sm' key={tag}>{` #${tag}`}</span>
                    ))} className={`lowercase`}/>
                </div>
                <div className='w-full px-3 pb-10'>
                    <a href="#">mark as read</a>
                </div>
                <div className='w-full pb-4'>
                    <img src={line} alt="content-border" className='' />
    
                </div>    
        </div>
    );
};

// Define PropTypes
BlogContent.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        author_image: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        hash_tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default BlogContent;