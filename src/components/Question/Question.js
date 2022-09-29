import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h1>Question and Answer</h1>

            <div className='question'>
                <h2>Q.1 How does React works?</h2>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

                    It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.

                    This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
            </div>
            <div className='question'>
                <h2>Q.2 Difference between props and state.</h2>
                <p>
                    <table>
                        <tr>
                            <th>Props</th>
                            <th>State</th>
                        </tr>
                        <tr>
                            <td>The Data is passed from one component to another.</td>
                            <td>The Data is passed within the component only.</td>
                        </tr>
                        <tr>
                            <td>It is Immutable (cannot be modified).</td>
                            <td>It is Mutable ( can be modified).</td>
                        </tr>
                        <tr>
                            <td>Props can be used with state and functional components.</td>
                            <td>State can be used only with the state components/class component (Before 16.0).</td>
                        </tr>
                        <tr>
                            <td>Props are read-only.</td>
                            <td>State is both read and write.</td>
                        </tr>
                    </table>
                </p>
            </div>
            <div className='question'>
                <h2>Q.3 UseEffect uses Fetching Data As well as ...</h2>
                <p>
                By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
                </p>
            </div>
        </div>
    );
};

export default Question;