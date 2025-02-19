import React from 'react';
import Blog from './Blog';
import Sidebar from './Sidebar';
const Contents = () => {
    return (
        <section className=' py-2 mt-3'>
            <main>
                <div className="container flex flex-wrap items-start  xxs:flex-col lg:flex-row justify-between px-3">
                    {/* blogs' field */}
                    <div className='w-7/12 bg-white'>
                        <Blog />
                    </div>
                    {/* blogs' info */}
                    <div className='w-4/12 mt-10'>
                        <Sidebar />
                    </div>

                </div>
            </main>
        </section>
    );
};

export default Contents;