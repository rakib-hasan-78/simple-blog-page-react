import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Sidebar from './Sidebar';
import { addToLS, getLS } from '../ls/LS';

const Contents = () => {
    const [ data , setData ] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    console.log(bookmark)
    useEffect(()=>{
        fetch('/data/db.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            });


    },[])

    useEffect(() => {
        const bookmarkIds = getLS(); 
        const bookmarkedTitles = bookmarkIds.map(id => {
            const foundItem = data.find(item => item.id === id); 
            return foundItem ? foundItem.title : null; // 
        }).filter(title => title !== null);

        const totalReadTime = bookmarkIds.reduce((prevTime , id)=>{
            const time = data.find(t=>t.id===id );
            return time ? prevTime + time.reading_time : time; 
        },0);
        setReadingTime(totalReadTime);
        setBookmark(bookmarkedTitles);

    }, [data]);

    const clickHandler = (data)=>{
        addToLS(data.id);
        setBookmark((prev)=> [...prev, data.title])
    }

    const readingHandler = data=>{
        addToLS(data.id)
        setReadingTime(readingTime => readingTime + data.reading_time)
    }

    return (
        <section className=' py-2 mt-3'>
            <main>
                <div className="container flex flex-wrap items-start  xxs:flex-col-reverse lg:flex-row justify-between px-3">
                    {/* blogs' field */}
                    <div className='xxs:w-full lg:w-7/12 bg-white'>
                        <Blog data={data} clickHandler={clickHandler} readingHandler={readingHandler } />
                    </div>
                    {/* blogs' info */}
                    <div className='xxs:w-full lg:w-4/12 mt-10'>
                        <Sidebar bookmark={bookmark}  readingTime={readingTime} />
                    </div>

                </div>
            </main>
        </section>
    );
};

export default Contents;


