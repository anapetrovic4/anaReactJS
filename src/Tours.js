// react imports
import React from 'react';

// components
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>The Best 5 Tours Ever</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          )
        })}
      </div>
    </section>
  );
};

export default Tours;