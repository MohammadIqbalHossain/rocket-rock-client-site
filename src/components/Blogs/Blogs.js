import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import './Blogs.css';

const Blogs = () => {
    return (

        <div className="blog-cover ">
            <div className="flex justify-around items-center md:flex-row flex-col ">
                <div className="md:text-left flex-col md:flex-row flex uppercase md:w-[600px] items-center mt-24">
                    <h1 className="text-4xl font-extralight text-orange-600">The Blog</h1>
                    <p className="text-sm text-gray-600 ml-5">Essays, Answers of the four qustions, and also tips from daddy. This Essay is for assignment answers.</p>
                </div>
                <div className="flex flex-col mx-10 items-center md:mt-24 mt-9">

                    <input
                        className="rounded-sm p-2"
                        type="text"
                        placeholder="Find something"
                    />


                    <div className="flex gap-10 my-5 mx-10 justify-center ">
                        <FaFacebook />

                        <MdMarkEmailRead />

                        <BsTwitter />
                    </div>


                </div>
            </div>

            {/* <img src={blogCover} height="10" className="h-80 w-full bg-none" alt=""/> */}


            <div className="flex justify-center ">
                <div className="text-left md:w-[600px] m-5 md:order-2 order-1">
                    <h1 className="text-3xl text-gray-500 mt-[200px]">How will you improve the performance of a React Application?</h1>
                    <p className="text-lg font-serif">
                        <strong >JavaScript : </strong> Before optimaizing the code we should learn first how a react application reder UI. Reast render Ui with Diff algorithms. In that basis we can optimize a react appliction inseveral ways. Like...
                        <br />
                        <br />
                        <strong >React pre-optimization techniques</strong> The profiler records how long it takes a component to render, why a component is rendering, and more. From there, we can investigate the affected component and provide the necessary optimization. Before we code we should learn about Things to cathing the application content. when we doen't need to aplly the several things in the UI we should not load them. Instead we can jsut that specific single data to display.

                        We can optimize application in several more ways. like.
                        <strong>Keeping component state local where necessary</strong>
                        <strong>Memoizing React components to prevent unnecessary re-renders</strong>
                        using callback hooks are good to Improve perfomance of a react app.
                    </p>

                    <h1 className="text-3xl text-gray-500 my-4">What are the different ways to manage a state in a React application?</h1>
                    <p className="text-lg font-serif">
                        there are the four main ways to manage a react state.
                        <li>
                            Local state.
                        </li>
                        <li>
                            Global state.
                        </li>
                        <li>
                            Server state.
                        </li>
                        <li>
                            URL state.
                        </li>
                    </p>

                    <h1 className="text-3xl text-gray-500 my-4"> How does prototypical inheritance work?</h1>
                    <p className="text-lg font-serif">
                        The prototype inheritance is a feature to add method in the JavaScript objetcts, and making relation to the another object.
                        If ewe need a value in an object er have to use DOT notation. 
                        t is an actual object that provides a way inherit to inherit properties from JavaScript with the help of an object which is created with new. Every object with behavior associated has internal property
                    </p>

                    <h1 className="text-3xl text-gray-500 my-4"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p className="text-lg font-serif">
                        We can't do that because this is a react hook given by react If we updaate the ser products it will replace all the afterwards you just made. typically a useState hook gives us two this one is function to set he data and another is the a variable to contain those data. this is how it's works. 

                        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.

                        if Do like the questions exmpale ew can also lose the control of a our Data.
                    </p>

                    <h1 className="text-3xl text-gray-500 my-4">What is a unit test? Why should write unit tests?</h1>
                    <p className="text-lg font-serif">
                        Unit test is basically writes for keeping the code in isolate mode. to test if the code is working properly or not. if does we can find early falws in the code. this is may help when we test our aplication. 

                        A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                        We actually need to write unit test because it helps developers write s better code. It's makes a engineers environment better and  more reliable this is the great this for a engineer who wants to  write better code and develop a grat application for the company. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;