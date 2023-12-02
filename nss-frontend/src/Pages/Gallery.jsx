import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="container shadow-5">
      <div id="photography-index-page" className="margin-top-25">
        <h5 className="page-title text-center"> Gallery </h5>
        <br />
        <div className="row multi-columns-row">
          {/* Add your gallery items here */}
          {/* Example for one gallery item */}
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-30">
            <a href="{{post.url}}" title="{{post.title}}">
              <span className="album block">
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
                <span className="link">Event1 </span>
              </span>
            </a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-30">
            <a href="{{post.url}}" title="{{post.title}}">
              <span className="album block">
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "sign.jpg" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/251/251/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/252/252/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/253/253/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="link">Event2 </span>
              </span>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-30">
            <a href="{{post.url}}" title="{{post.title}}">
              <span className="album block">
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "sign.jpg" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/251/251/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/252/252/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/253/253/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="link">Event2 </span>
              </span>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-30">
            <a href="{{post.url}}" title="{{post.title}}">
              <span className="album block">
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "sign.jpg" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/251/251/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/252/252/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/253/253/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="link">Event2 </span>
              </span>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-30">
            <a href="{{post.url}}" title="{{post.title}}">
              <span className="album block">
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "sign.jpg" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/251/251/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/252/252/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/253/253/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="link">Event2 </span>
              </span>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-top-30 padding-bottom-30 margin-top-30">
            <a href="{{post.url}}" title="{{post.title}}">
              <span className="album block">
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "sign.jpg" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/251/251/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/252/252/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="thumb">
                  <span className="polaroid shadow-5" style={{ backgroundImage: "url('http://lorempixel.com/253/253/Event2/')" }}>&nbsp;</span>
                </span>
                <span className="link">Event2 </span>
              </span>
            </a>
          </div>

          {/* End of gallery item */}
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default Gallery;
