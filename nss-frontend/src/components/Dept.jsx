import {React,useState} from 'react'
import './Dept.css'
import {Popup} from '../components';

const Dept = ({image,data}) => {
    const [seen, setSeen] = useState(false)
    function togglePop () {
        setSeen(!seen);
    };
  return (
    <>
    <div className="cetq8 cyhno cklpe cefn9 c29n1 cp6k2 csckw">
        <div className="cet3m">

            <img onClick={togglePop} className="crs2d cjkjb max-w-[500px] max-h-[500px] flex justify-center items-center" src={image} width="100" height="100" alt="dona"/>
            {seen ? <Popup toggle={togglePop} org={data?.organisations} /> : null}
        </div>
    </div>
    </>
  )
}

export default Dept