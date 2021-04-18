import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const handleDragStart = (e) => e.preventDefault();


const items = [
            <div class="slider" id="item-1" onDragStart={handleDragStart}>
              <p class="card-text-2" id="slider-1">
                
                "Depression isn’t a choice – it can happen to anyone."
              </p>
              <p class="small-text">Nadia,London</p>
            </div>,
            <div class="slider" id="item-2" onDragStart={handleDragStart}>
              <p class="card-text-2" id="slider-2">
                
                "Mental health wasn't a conversation I had when I was growing up."
              </p>
              <p class="small-text">George,London</p>
            </div>,
            <div class="slider" id="item-3" onDragStart={handleDragStart}>
              <p class="card-text-2" id="slider-3">
                
                "Every day I have to challenge myself and my voices."
              </p>
              <p class="small-text">David,London</p>
            </div>,
            <div class="slider" id="item-4" onDragStart={handleDragStart}>
              <p class="card-text-2" id="slider-4">
                
                "It's hard to talk about mental health, so ask twice."
              </p>
              <p class="small-text">Georgia,London</p>
            </div>
 
];

const MainCarousel = () => {
    return (
         <AliceCarousel infinite mouseTracking items={items} responsive={responsive}
        controlsStrategy="alternate" />
    )
}

export default MainCarousel
