import React, {useState} from 'react';
import data from '../data';
import '../styles/_Cards.css';

const Cards = () => {
    // Sets state to a no active card
    const [activeCard, setActive] = useState(-1);

    // onClick function to set the state and add/remove a class for box-shadow animations
    const activate = (id) => {
        setActive(id)
        let cards = Array.from(document.getElementsByClassName("card"));
        cards.forEach(card => {
            card.classList.remove('active')
        });
        document.getElementById(id).classList.add('active')
    }

    return (
        <div className="cardsContainer">
            {/* Creates a card div element for each object in the data array. It accounts for workout or series of workouts entries */}
            {data.map((d, index) => {
                const workout = d.type === 'workout';
                return (
                    <div className="card" id={"Card-"+index} key={d.title} onClick={() => activate("Card-"+index)}>
                        <div className="imgCon">
                            <img src={d.thumb} alt={d.title + '-image'}/>
                            {!workout ? 
                                <div className ="seriesWorkouts">
                                    <div className='lNum'>{d.workouts.length}</div>
                                    <div className="text">WORKOUTS</div>
                                    <div><img src="/images/icn_playlist.svg"/></div>
                                </div> : ''
                            }
                        </div>
                        <div className="cardContent">
                            <div className="textContent">
                                <h3>{d.title}</h3>
                                {workout ? 
                                    <div className="workoutDetails">
                                        <div><img src="/images/icn_timer_line.svg" alt=''/></div><div>{d.metricTime}</div> 
                                        <div><img src="/images/icn_distance_line.svg" alt=''/></div><div>{d.metricDistance}</div>
                                    </div> : ''
                                }
                                {workout && d.details.length != 0 ? 
                                    <a href="/#"  className="cardCta" >VIEW DETAILS</a> : ''
                                }
                            </div>
                            <div className="trainer">
                                <img src={d.trainer} alt={d.title + '-trainer'} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards

// Things I noticed but were not clear to me from the design: 
// 1. It was not clear if the top left card was to start in an active state. I made it so that by default no card is active as the explanation seems to indicate that the active state should be user interaction based.
// 2. The View Details link in the first card would link to a modal or a workout details page. For now I linked ot to just /# as the link destination is not clear.
