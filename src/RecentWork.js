import React, { useState } from 'react';
import './customCSS/RecentWork.css';
import mirepoix from './images/Mirepoix.png'
import extractor from './images/Extractor.png'



const RecentWork = () => {

    let [toggleModal, setToggleM] = useState(true)
    const proj1 = <iframe title="mrpx" width="560" height="315" src="https://www.youtube.com/embed/MqESv6l-Iig" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    const proj2 = <iframe title="extrctr" width="560" height="315" src="https://www.youtube.com/embed/JYKm5tjoZT4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    const toggleM = () => {
        setToggleM(!toggleModal)
        console.log(toggleModal)
    }

    const showHide = () => {
        if(toggleModal === true) {
            return "Modal"
        } else {
            return "Modal-Open"
        }
    }
    
    return (
        <div id="RW">
            <div className="Gallery">
                <div onClick={toggleM} className="Img-Container">
                    <img src={mirepoix} alt="Mirepoix" data-original={proj1}></img>
                </div>
                <div onClick={toggleM} className="Img-Container">
                    <img src={extractor} alt="Extractor" data-original={proj2}></img>
                </div>

                <div onClick={toggleM} className={showHide()}>
                    <div className="Full">{proj1}</div>
                </div>
            </div>
        </div>
    );
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/MqESv6l-Iig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  */ }
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/JYKm5tjoZT4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  */ }

export default RecentWork;