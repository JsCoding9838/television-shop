import React from 'react';
import './AboutReact.css'

const AboutReact = () => {
    return (
        <div className='react-container container'>
            <h2 className='mb-3 fw-bold'>Something About React</h2>
            <div className="about-react row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">How is React Works?</h5>
                            <p className="card-text">
                                React a javascript based UI development library. and it is widely used in web development. this is most commonly used frontend libraries for web development. and easy to understand the react library. and whenever the root element is of a different type  the entire is destryed and a new tree is build from scratch i e.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Differences between Props vs State?</h5>
                            <p className="card-text">
                                State is a special property which is mutable property that hold a componet data. and it is default value when componet moutnts. generally, the difference is that state is monething like attributes in oop.
                                and specialy that is the props are read only on the other hand State can be changes asynchronously.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">How is useState works?</h5>
                            <p className="card-text">
                                The useState is a hook that allows have state variables in functional componets.react has two component one is class component which are ES6 that stands from react and the oter is functional component. The useState hook is special fuction that takes the initial state as an argument and return of the entries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutReact;