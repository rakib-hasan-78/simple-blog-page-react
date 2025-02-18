import React from 'react';
import coverImg from '../assets/2.png'
import profile from '../assets/profile.png'
import bookmark from '../assets/Vector.svg';
import line from '../assets/Line.svg'; 
import Title from './Title';
import Text from './Text';
const Contents = () => {
    return (
        <section className=' py-2 mt-3'>
            <main>
                <div className="container flex flex-wrap items-start  xxs:flex-col lg:flex-row justify-between px-3">
                    {/* blogs' field */}
                    <div className='w-7/12 bg-white'>
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
                                <div className='flex px-1 items-center space-x-3'>
                                    <Text className={`text-sm`} tag={`span`} text={`05 min read`} />
                                    <div className='w-4'>
                                    <img src={bookmark} alt="" />
                                    </div>
                                </div>
                            </div>
                             <div className='w-full flex items-center justify-start p-3 pr-16 pb-5'>
                                <Title className={`pr-28`} tag={`2`} text={`how to make changes to pursue a bter lifw e life is al.`}/>
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
                    </div>
                    {/* blogs' info */}
                    <div className='w-4/12 mt-10'>
                    <sidebar className='flex items-start justify-start space-y-5 flex-col'>
                        <div className='w-full py-3 bg-indigo-700/30 border border-indigo-500 rounded-md'>
                        <Title tag={`4`} text={`spent time on read : 177 min`} />
                        </div>
                        <div className='w-full bg-stone-200 py-4 pb-9 flex flex-col items-start rounded-md'>
                            <div className='w-10/12 py-2 flex items-center justify-center'>
                                <Title tag={`3`} text={`bookmarked blogs : 8  ` } />
                            </div>
                            <div className='w-10/12 mx-auto flex flex-wrap flex-col items-center justify-center space-y-4'>
                                <div className='w-full bg-stone-100 py-2 rounded-md pr-20 px-3'>
                                    <Text tag={`p`} text={`the farmer had three sons & bingo was his name`} />
                                </div>
                                <div className='w-full bg-stone-100 py-2 rounded-md pr-20 px-3'>
                                    <Text tag={`p`} text={`the farmer had three sons & bingo was his name`} />
                                </div>
                                <div className='w-full bg-stone-100 py-2 rounded-md pr-20 px-3'>
                                    <Text tag={`p`} text={`the farmer had three sons & bingo was his name`} />
                                </div>
                                <div className='w-full bg-stone-100 py-2 rounded-md pr-20 px-3'>
                                    <Text tag={`p`} text={`the farmer had three sons & bingo was his name`} />
                                </div>
                                <div className='w-full bg-stone-100 py-2 rounded-md pr-20 px-3'>
                                    <Text tag={`p`} text={`the farmer had three sons & bingo was his name`} />
                                </div>
                                <div className='w-full bg-stone-100 py-2 rounded-md pr-20 px-3'>
                                    <Text tag={`p`} text={`the farmer had three sons & bingo was his name`} />
                                </div>
                            </div>
                        </div>
                    </sidebar>
                    </div>

                </div>
            </main>
        </section>
    );
};

export default Contents;