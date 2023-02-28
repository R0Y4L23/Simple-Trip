import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import CarouselComponent from './CarouselComponent';

const CarouselMain = () => {
  const points = [
    ["Our AI-powered personalized copywriting app generates high-quality, tailor-made copy that speaks directly to your target audience.",
    "It analyzes your brand voice and customer demographics, resulting in content that truly resonates with your audience.",
    "It helps you to create content that drives engagement and conversion."],
    ["Our app uses natural language processing and machine learning algorithms to analyze your brand voice and customer demographics, resulting in a streamlined writing process.",
    "It allows you to create high-quality content in less time, allowing you to focus on other important tasks.",
    "It helps you to save time and resources."],
    ["With our AI-driven personalized copywriting, you can create content that resonates with your target audience and drives engagement and conversion.",
    "By speaking directly to your audience, your content is more likely to be shared, liked, and commented on, leading to increased engagement and conversions.",
    "It helps you to increase your brand's visibility and reach."],
    ["Our app is the only solution that uses AI-driven personalized copywriting, revolutionizing the way companies create content and communicate with their target audience.",
    "With our cutting-edge technology, you can stay ahead of the competition and create content that truly stands out.",
    "It helps you to be innovative and stay ahead in your industry."]
  ]
  return (
    <Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
      <div className='flex flex-row'>
        <CarouselComponent  position={"01"} image={"/assets/pexels-thirdman-7652039.jpg"} icon={"fa-solid fa-person-rays "} heading={"Personalization"} hiddenaction={"Unique Messages"} action={"crafts "}  list={points[0]}/>
        <CarouselComponent  position={"02"} image={"/assets/pexels-mikael-blomkvist-6476806.jpg"} icon={"fa-solid fa-arrow-up-right-dots "} heading={"Efficiency"} hiddenaction={"the Process"} action={"automates"} list={points[1]}/>
        <CarouselComponent  position={"03"} image={"/assets/pexels-cameron-casey-1687093.jpg"} icon={"fa-solid fa-users "} heading={"Engagement"} hiddenaction={"to the audience"} action={"speaks "} list={points[2]}/>
        <CarouselComponent  position={"04"} image={"/assets/pexels-george-milton-7015034.jpg"} icon={"fa-solid fa-lightbulb "} heading={"Innovation"} hiddenaction={"the mold"} action={"breaks "} list={points[3]}/>
      </div>
      
    </Carousel>
  )
}

export default CarouselMain
