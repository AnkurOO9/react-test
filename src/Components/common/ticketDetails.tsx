import React from 'react';
import Tickets from '../../interface/Tickets';
import userProfile from '../../assets/images/user-profile.png';
import clockGreen from '../../assets/images/clock-green.png';
import clock from '../../assets/images/clock.png';
import moment from 'moment';

interface TicketProps {
    ticket: Tickets
}

const TicketDetails: React.FC<TicketProps> = ({ ticket }) => {
    
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={ticket.id} >
            <div className="box shadow d-flex justify-content-between py-3 px-3 align-items-center">
                <div className="heading text-start">
                    <h4 className="fw-bold">{ticket.title}</h4>
                    <span className="fw-bold d-inline-block mt-2">
                        <img src={userProfile} alt="profile" className="me-2 icon-size" />
                        {ticket.role}
                    </span>
                </div>
                <div className="right-text">
                    <div className="review text-center rounded fw-normal text-capitalize">{ticket.status}</div>
                    <span className="fw-bold d-inline-block mt-2">
                        <img src={moment(ticket.result_date).format('YYYY-MM-DD') > moment().format('YYYY-MM-DD') ? clockGreen : clock} alt="clock" className="me-2 icon-size" />
                        {moment(ticket.result_date).format('MMM DD, YYYY')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TicketDetails;