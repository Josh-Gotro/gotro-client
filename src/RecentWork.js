import React, { useState } from 'react';
import './customCSS/RecentWork.css';
import mirepoix from './images/Mirepoix.png'
import extractor from './images/Extractor.png'
import sendsms from './images/SendSMS.png'



const RecentWork = () => {
    const proj1 = <iframe title="mrpx" width="560" height="315" src="https://www.youtube.com/embed/MqESv6l-Iig" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    const proj2 = <iframe title="extrctr" width="560" height="315" src="https://www.youtube.com/embed/JYKm5tjoZT4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    const proj3 = <iframe title="sendsms" width="560" height="315" src="https://www.youtube.com/embed/4OyshoZ42zk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    let [viewProject, setViewProject] = useState(null)
    let [toggleModal, setToggleM] = useState(true)

    const toggleM = (proj) => {
        setViewProject(proj)
        setToggleM(!toggleModal)
        console.log(proj)
    }

    const toggleM2 = () => {
        setViewProject(null)
        setToggleM(!toggleModal)
    }

    const showHide = () => {
        if (toggleModal === true) {
            return "Modal"
        } else {
            return "Modal-Open"
        }
    }

    return (<>
        <div className="zigzag"></div>
        <div id="RW" className="Spacer" ></div>
        <div className="RWTitle"><h2>recent work</h2></div>
        <div className="Gallery">

            <div className="RW">
                <div onClick={() => toggleM(proj3)} className="Img-Container">
                    <img src={sendsms} alt="Send an SMS" data-original={proj3}></img>
                </div>

                <div className="FancyText3">
                    <h2>Send an SMS</h2><br />
                    <p>Send and receive SMS texts in real-time.</p>
                </div>

            </div>

            <div className="RW">
                <div onClick={() => toggleM(proj1)} className="Img-Container">
                    <img src={mirepoix} alt="Mirepoix" data-original={proj1}></img>
                </div>

                <div className="FancyText3">
                    <h2>Mirepoix</h2><br />
                    <p> Cost tracking tool for hospitality professionals</p>
                </div>
            </div>

            <div className="RW">
                <div onClick={() => toggleM(proj2)} className="Img-Container">
                    <img src={extractor} alt="Extractor" data-original={proj2}></img>
                </div>

                <div className="FancyText3">
                    <h2>Extractor</h2><br />
                    <p>Identify the most prominent colors in an image using <a className="FancyText4" href="https://lokeshdhakar.com/projects/color-thief/" target="_blank" rel="noopener noreferrer">Color Thief</a></p>
                </div>

            </div>

            <div onClick={toggleM2} className={showHide()}>
                <div className="Full">{viewProject}</div>
            </div>
        </div>
        <div className="zigzag"></div>
    </>
    );
}

export default RecentWork;