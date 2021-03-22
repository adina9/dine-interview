import backSrc from '../assets/images/patterns/pattern-curve-top-right.svg'
import src from '../assets/images/homepage/family-gathering-desktop.jpg'
import moblieImgSrc from '../assets/images/homepage/family-gathering-mobile.jpg'
import linesSrc from '../assets/images/patterns/pattern-lines.svg'
export function PartD() {
    return (
        <div className="flex partD">
            <div className="back-img">
                <img src={backSrc} alt=""/>
            </div>
            <div className="img">
                <img src={src} alt=""/>
            </div>
            <div className="mobile-img">
                <img src={moblieImgSrc} alt="" hidden/>
            </div>
            <div className="lines-img">
                <img src={linesSrc} alt=""/>
            </div>
            <div className="line"></div>
            <div className="right">
                <div className="top-txt">
                    <p className="title">
                        Family Gathering
                        </p>
                    <p className="full-txt">
                        We love catering for entire families. So please bring everyone along for a special meal with your
                        loved ones. We’ll provide a memorable experience for all.
                        </p>
                </div>
                <button className="btn">BOOK A TABLE</button>
                <div className="bottom-txt">
                    <p className="title">Family Gathering</p>
                    <p>  Special Events</p>
                    <p> Social Events</p>
                </div>
            </div>
        </div>
    )
}