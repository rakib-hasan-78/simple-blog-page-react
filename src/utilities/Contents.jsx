import React from 'react';
import coverImg from '../assets/2.png'
import profile from '../assets/profile.png'
import Title from './Title';
import Text from './Text';
const Contents = () => {
    return (
        <section className=' py-2 mt-3'>
            <main>
                <div className="container flex flex-wrap items-center xxs:flex-col lg:flex-row justify-between px-2">
                    {/* blogs' field */}
                    <div className='w-8/12 bg-white'>
                        <div className='w-full h-auto flex flex-col items-center justify-center'>
                            <div className='w-full'>
                                <img src={coverImg} alt="" />
                            </div>
                            <div className='w-full py-5 flex items-center justify-between'>
                                <div className='flex items-center space-x-3'>
                                    <div className='w-12 h-12'>
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className='flex flex-col items-start space-y-1 border '>
                                        <Title tag={`5`} text={`md raju`} />
                                        <Text tag={`span`} text={`mar 14 (4 days ago)  `}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* blogs' info */}
                    <div className='w-3/12 border'>

                    </div>
                </div>
            </main>
        </section>
    );
};

export default Contents;