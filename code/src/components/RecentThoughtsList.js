import React from 'react';
import moment from 'moment';
// import LikeAPost from './LikeAPost';
// import { API_URL } from 'utils/urls';

const RecentThoughtsList = ({ recentThoughts, onLikes }) => {
  // const [recentThoughts, setRecentThoughts] = useState([]);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((json) => setRecentThoughts(json));
  // }, []);

  return (
    <section className='recent-thoughts-section'>
      {recentThoughts.map((thought) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={thought._id} className='thought-card'>
          <p>{thought.message}</p>
          {/* <p>id: {thought._id}</p> */}
          <div className='heart-timestample-container'>
            <p className='hearts-container'>
              <button
                aria-label='Like this post'
                type='button'
                className='heart-emoji'
                style={{
                  backgroundColor: thought.hearts > 0 ? '#ffadad' : '#eaeaea',
                }}
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => onLikes(thought._id)}
                // eslint-disable-next-line react/jsx-closing-bracket-location
              >
                <span role='img' aria-label='heart emoji'>
                  ❤️
                </span>
              </button>
              &nbsp;<span aria-hidden='true'>x</span>&nbsp;
              <span>{thought.hearts} likes</span>
            </p>
            <p>{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecentThoughtsList;
