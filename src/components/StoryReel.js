import React from 'react';
import './styles/StoryReel.css';
import Story from './Story';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
        image='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
        profileSrc='https://media-exp1.licdn.com/dms/image/C4D03AQEcprotW7-6vA/profile-displayphoto-shrink_200_200/0/1603670661020?e=1629331200&v=beta&t=tkQU_74rapWNsqT69mdwINsQXzGZQVRcWyKYVotMv5M'
        title='Imran Mohamed'
      />
      <Story
        image='https://media.wired.co.uk/photos/606db762e46630a583ab32e2/16:9/w_1280,c_limit/sunmeta.jpg'
        profileSrc=''
        title='Suun'
      />
      <Story
        image='https://media.wired.co.uk/photos/606db762e46630a583ab32e2/16:9/w_1280,c_limit/sunmeta.jpg'
        profileSrc=''
        title='Suun suun'
      />
      <Story
        image='https://media.wired.co.uk/photos/606db762e46630a583ab32e2/16:9/w_1280,c_limit/sunmeta.jpg'
        profileSrc=''
        title='Suun suun suun'
      />
    </div>
  );
};

export default StoryReel;
