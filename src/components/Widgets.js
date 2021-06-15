import React from 'react';
import './styles/Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <iframe
        title='CleverProgrammer'
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        frameborder='0'
        allow='encrypted-media;'
        allowTransparency='true'
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
      ></iframe>
    </div>
  );
};

export default Widgets;
