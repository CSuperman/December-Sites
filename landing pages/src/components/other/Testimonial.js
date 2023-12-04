import React from 'react'
import usera from ''
import userb from ''



const Testimonial = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Testimonials</h2>
                    <p>Gossip about our greatness...</p>
                </div>
                <div className="testimonial-container">
                    <img src={usera} alt="Avatar" style={{width:"75px"}}/>
                    <p><span>Bob Smith</span> Pizza boy</p>
                    <p>Perfecto!</p>
                </div>

                <div className="testimonial-container">
                    <img src={userb} alt="" style={{width:"75px"}}/>
                    <p><span>Karen</span> Teacher</p>
                    <p> Will buy again.</p>
                </div>

                <div className="testimonial-container">
                    <img src={userc} alt="" style={{width:"75px"}}/>
                    <p><span>Influencer</span> Influencer</p>
                    <p>Best of the best.</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Testimonial;