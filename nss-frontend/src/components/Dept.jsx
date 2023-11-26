import React from 'react'
import './Dept.css'
import { education } from "../assets/images";
const Dept = () => {
  return (
    <div className="cetq8 cyhno cklpe cefn9 c29n1 cp6k2 csckw">
        <div className="cet3m">
            <div className="clpz0 cdxpy c6xyh czmmv">Starter</div>
            <img className="crs2d ml-[50px] cjkjb max-w-[100px] max-h-[100px] flex justify-center" src={education} width="20" height="40" alt="dona"/>
            
        </div>
        <div className="c755p">
            <div className="c65xn clpz0 cdxpy cfd1k cet3m">$0/m</div>
            <a className="cv52j c38qt cyuce c98p9 ckk70 co504 cn4p0 cjkjb" href="#0">Get Starter</a>
        </div>
        <div className="c65xn cj88f cet3m">Features include</div>
        <ul className="c3z20 cjbs3 cjmb3">
            <li className="cdjl1 c29n1">
                <svg className="ct2sv cf9f3 ce0su cusyb cqma5 cjcqp c2hn4" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Contactless payments</span>
            </li>
            <li className="cdjl1 c29n1">
                <svg className="ct2sv cf9f3 ce0su cusyb cqma5 cjcqp c2hn4" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Mobile payments</span>
            </li>
            <li className="cdjl1 c29n1">
                <svg className="ct2sv cf9f3 ce0su cusyb cqma5 cjcqp c2hn4" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Extra card (optional)</span>
            </li>
            <li className="cdjl1 c29n1">
                <svg className="ct2sv cf9f3 ce0su cusyb cqma5 cjcqp c2hn4" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Free payments worldwide</span>
            </li>
            <li className="cdjl1 c29n1">
                <svg className="ct2sv cf9f3 ce0su cusyb cqma5 cjcqp c2hn4" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Free domestic ATM withdrawals</span>
            </li>
        </ul>
    </div>
  )
}

export default Dept