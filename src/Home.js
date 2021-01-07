import React from 'react';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card 
          src="https://i.pinimg.com/originals/e3/b0/6d/e3b06d0f36ca7cdf0606467fafcadf38.jpg"
          title="Khoinonia Guesthouse"
          description="The apartment is self catering with luxurious 2 bedroom accommodation. Enjoy the beautifully decorated apartment located right next to the beach."
        />
        <Card 
           src="https://i.pinimg.com/originals/3f/92/d7/3f92d7c7559678a9af034f752075751f.png"
           title="Luc-ster Guesthouse"
           description="Beautiful place."
        />
        <Card 
           src="https://www.malagatransfer.co.uk/blog/wp-content/uploads/2016/06/calahonda-dona-lola.jpg"
           title="Franscchoek Apartments"
           description="Family God Love"
        />
      </div>
      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
