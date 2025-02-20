import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Sidebar from './Sidebar';
const Contents = () => {
    const [ data , setData ] = useState([]);
    
    useEffect(()=>{
        fetch('../../public/data/db.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    },[])

    return (
        <section className=' py-2 mt-3'>
            <main>
                <div className="container flex flex-wrap items-start  xxs:flex-col lg:flex-row justify-between px-3">
                    {/* blogs' field */}
                    <div className='xxs:w-full lg:w-7/12 bg-white'>
                        <Blog data={data} />
                    </div>
                    {/* blogs' info */}
                    <div className='xxs:w-full lg:w-4/12 mt-10'>
                        <Sidebar />
                    </div>

                </div>
            </main>
        </section>
    );
};

export default Contents;