import React from 'react';

export default function Marquee() {
  return (
    <div className="pt-40 pb-40 pt-md-0 pb-md-0">
      <div className="marquee marquee-style-3 mb-30 mb-md-0 z-index-1">
        <div className="marquee-track marquee-animation-1a">
          <div>"Friendship First"</div>
          <div aria-hidden="true">"Open Up"</div>
          <div aria-hidden="true">"Real & True"</div>
          <div aria-hidden="true">"Judgement Free"</div>
          <div aria-hidden="true">"No Asshole"</div>
          <div aria-hidden="true">"Engage & Enlighten"</div>
          <div aria-hidden="true">"Inclusive & Diversity"</div>
        </div>
      </div>
      <div className="marquee marquee-style-4 clearfix">
        <div className="marquee-track marquee-animation-2a float-end">
          <div className="bg-linen">Tailored Tasting Menu</div>
          <div className="bg-linen">Handpicked Wine</div>
          <div aria-hidden="true" className="bg-linen">
            Like-minded Strangers
          </div>
          <div aria-hidden="true" className="bg-linen">
            Unlimited Laughters
          </div>
          <div aria-hidden="true" className="bg-linen">
            Tailored Tasting Menu
          </div>
          <div aria-hidden="true" className="bg-linen">
            Handpicked Wine
          </div>
          <div aria-hidden="true" className="bg-linen">
            Like-minded Strangers
          </div>
          <div aria-hidden="true" className="bg-linen">
            Unlimited Laughters
          </div>
        </div>
      </div>
    </div>
  );
}
