import React from 'react';
import './AboutReact.css'

const AboutReact = () => {
    return (
        <div className='react-container container'>
            <h2 className='mb-3 fw-bold'>Something About React</h2>
            <div class="about-react row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">How is React Works?</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Differences between Props vs State?</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">How is useState works?</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutReact;