import React from 'react';

const Blogs = () => {
    return (
        <div className='p-12'>
             <h1 data-aos='fade-right'
          data-aos-delay='400'
          data-aos-duration='900'
          class='text-5xl font-bold px-9 mb-12 text-error mx-auto text-center'>
             WElcome To my Blogs
         </h1>
           <div className='  rounded-md border border-light pt-4 pb-5 mb-5 shadow-sm mt-5 p-28 my-9 px-20'>
          <h1 className='text-primary text-center text-3xl font-semibold py-4'>How will you improve the performance of a React Application?</h1>
           <h2 className='text-primary text-center text-2xl font-semibold py-4'>REACT APP PERFORMANCE TIPS:</h2>
            <ul className='text-center w-75 mx-auto lh-lg text-2xl font-semibold py-2'>
                <li className='py-2'>For components using primitive data, you can use the React.PureComponents base class, which internally uses the implementation of the shouldComponentUpdate() function to reduce rendering time. This small but clever practice can greatly improve parent component load times.</li>
                    <li className='py-2'>
                    Avoid directly modifying objects by making copies of the objects with the desired data changes. Use immutable data structures that will automatically apply this process when the object's state changes. This will make it easy to detect state changes, which improves your React app's overall performance.
                    </li>
                   <li className='py-2'>To give code warnings and other useful information about the code, React has host environment checks scattered throughout the files. While this helps developers, there is no point in going through this when deploying an application to production. To remove these unnecessary lines of code, do a production build with npm run build as best practice and improve the performance of your React app.</li>
                   <li className='py-2'>To load the client-side JavaScript load faster, compress the JavaScript code using Gzip or Brotli on the application server. This will allow faster fetching and serving, resulting in faster component loading and rendering times.</li>
                   <li className='py-2'>It is available as an extension for Chrome, Firefox and will help you identify unnecessary renders of your react components by highlighting them with different colors. You can install it and open it while working on react app. In the "Highlight Updates" field, you should see the react components marked green, blue, yellow, or red.</li>
                   <li className='py-2'>Google offers Chrome Dev Tools , which run in your chrome browser to edit and render changes to your web pages easily. These tools help you analyze performance issues in your react app without having to create a build. Using Chrome DevTools, you can see loading components and their loading times to identify potential bottlenecks and unnecessary visualization for code optimization.</li>
            </ul>
            </div>

                  {/* 2nd ques  */}
            <div className='  rounded border border-light pt-4 pb-5 mb-5 shadow-sm my-12 px-20'>
                <h1 className='text-primary text-center text-3xl font-semibold py-4'>What are the different ways to manage a state in a React application?</h1>
                <h2 className='text-primary text-center text-2xl font-semibold py-4'>Examples of different ways to manage state of a React application</h2>
               <ul className='text-center w-75 mx-auto lh-lg text-2xl font-semibold py-2'>
                   <li className='py-2'>
                   01_react_stateful_component - Using builtin state and props management
                   </li>
                   
                   <li className='py-2'>
                   02_react_hooks - Using the new Hooks method useState, etc.
                   </li>
                   <li className='py-2'>
                   03_react_redux - Using React Redux to manage app's statue 
                   </li>
               </ul>
            </div>

                 {/* 3rd ques */}
            <div className='  rounded border border-light pt-4 pb-5 mb-5 shadow-sm my-12 px-20 ' >
                <h1 className='text-primary text-center text-3xl font-semibold py-4'>How does prototypical inheritance work?</h1>
                <h2 className='text-primary text-center text-2xl font-semibold py-4'>Differences between sql and nosql databases?</h2>
                <p className='text-center w-75 mx-auto lh-lg text-2xl font-semibold py-2'>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.
               </p>
               <h2 className='text-primary text-center text-2xl font-semibold py-4'>All JavaScript objects inherit properties and methods from a prototype:</h2>
               <ul className='text-center w-75 mx-auto lh-lg text-2xl font-semibold py-2'>
            <li className='py-2'>
            Date objects inherit from Date.prototype.
            </li>
        <li className='py-2'>
        Player objects inherit from Player.prototype.
    </li>
      <li className='py-2'>
      Array objects inherit from Array.prototype.
       </li>
        </ul>
          </div>
                     {/* 4th ques */}
            <div className='  rounded border border-light pt-4 pb-5 mb-5 shadow-sm my-12 px-20'>
                <h2 className='text-primary text-center text-3xl font-semibold py-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='text-center w-75 mx-auto lh-lg text-2xl font-semibold py-2'>
                Array.filter() or Array.find()
               </p>
          </div>
                  {/* 5th ques */}
            <div className='  rounded border border-light pt-4 pb-5 mb-5 shadow-sm my-12 px-20 '>
                <h2 className='text-primary text-center text-3xl font-semibold py-4'>What is a unit test? Why should write unit tests?</h2>
                <p className='text-center w-75 mx-auto lh-lg text-2xl font-semibold py-2'>
                Unit tests, by definition, examine each unit of your code separately. But when your application is run for real, all those units have to work together, and the whole is more complex and subtle than the sum of its independently-tested parts.
                The main reason to write unit tests is to gain confidence. Unit tests allow us to make changes, with confidence that they will work. Unit tests allow change. Unit tests work like a "safety net" to prevent us from breaking things when we add features or change our codebase.
               </p>
          </div>

        </div>
    );
};

export default Blogs;