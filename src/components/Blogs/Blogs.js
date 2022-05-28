import React from 'react';

const Blogs = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-y-7 container mx-auto mt-10 md:grid-cols-2">
            <h3 className="text-4xl my-14 font-semibold"> All <span className="text-violet-400">Products</span></h3>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">How will you improve the performance of a React Application?</h2>
                    <p className="mt-4 text-gray-400">1. Code spliting by import() in React <br /> 2. use lazy loading image in React<br />3. keeping component state where necessary<br />4. Memoizing React components to prevent unnecessary re-renders by useCallback and useMemo hook.<br /> 5. Avoid anonymous function in React</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Yeasir Arafat</h3>
                            <time datetime="2021-02-18" className="text-sm text-gray-400">May 28th 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">how does prototypal inheritance work?</h2>
                    <p className="mt-4 text-gray-400">An internal and secret attribute known as [[Prototype]] may be found in every object. Javascript's Prototypal Inheritance capability is used to add methods and attributes to objects. It's a way for one thing to take on the characteristics and abilities of another. We've been using Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object. In modern language, _proto_ is used to set it.</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Yeasir Arafat</h3>
                            <time datetime="2021-02-18" className="text-sm text-gray-400">May 28th 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">Why should write unit tests?</h2>
                    <p className="mt-4 text-gray-400">Unit tests have the advantage of focusing just on a single function, class, or method. The entire system's resilience may be attributed to the higher quality of its constituent components. As a consequence, we have solid code. The nature of the debugging process is likewise altered by unit tests.</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Yeasir Arafat</h3>
                            <time datetime="2021-02-18" className="text-sm text-gray-400">May 28th 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">What are the different ways to manage a state in a React application?</h2>
                    <p className="mt-4 text-gray-400">There are four types of states to manage in React app. <br />
                        1. Local State: Local state is data we manage in one or another component by useState Hook. <br />
                        2. Global State: Global state is data we manage across multiple components by useContext Hook or api. <br />
                        3. Server state: Data that comes from an external server that must be integrated with our UI state, React Query makes easier to manage server state <br />4. URL state: Data that exists on our URLs, including the pathname and query parameters. useLocation are used in this case.</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Yeasir Arafat</h3>
                            <time datetime="2021-02-18" className="text-sm text-gray-400">May 28th 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">What is a unit test?</h2>
                    <p className="mt-4 text-gray-400">For decades, unit testing has been an effective means of ensuring the high quality of software. To ensure that an application fulfills its design standards and acts as expected, unit tests are essential..</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Yeasir Arafat</h3>
                            <time datetime="2021-02-18" className="text-sm text-gray-400">May 28th 2022</time>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blogs;