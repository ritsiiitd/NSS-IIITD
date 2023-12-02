import React from 'react'

const Polaroid = ({eventName}) => {
  console.log("here it goes", eventName);
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-0">
            <a href="{{post.url}}" title={eventName}>
              <span className="album block gap-4">
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "sign.jpg" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/251/251/Event1/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/252/252/Event1/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/253/253/Event1/')" }}>&nbsp;</span>
                </span>
                <div className="my-[-20px] font-palanquin w-[100%] h-[40px] link">{eventName} </div>
              </span>
            </a>
          </div>
  )
}

export default Polaroid