import backSrc from '../assets/images/patterns/pattern-curve-top-right.svg'
import src from '../assets/images/homepage/enjoyable-place-desktop.jpg'
import backSrc2 from '../assets/images/patterns/pattern-curve-top-left.svg'
import src2 from '../assets/images/homepage/locally-sourced-desktop.jpg'
import linesSrc from '../assets/images/patterns/pattern-lines.svg'
export function PartB() {
    return (
        <div className="partB">
            <div className="flex top">
                <div className="back-img">
                    <img src={backSrc} alt="" />
                </div>
                <div className="img">
                    <img src={src} alt="" />
                </div>
                <div className="txt">
                    <p className="title">  Enjoyable place for all the family</p>
                    <p className="full-txt">
                        Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
                        a tour of the farm before your meal.
                    </p>
                </div>
            </div>
            <div className="flex bottom">
                <div className="txt">
                    <p className="title">The most locally sourced food</p>
                    <p className="full-txt">  All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
                    eating the freshest, most sustainable food.
                    </p>
                </div>
                <div className="bottom-back-img">
                    <img src={backSrc2} alt="" />
                </div>
                <div className="img">
                    <img src={src2} alt="" />
                </div>
                <div className="lines-img">
                    <img src={linesSrc} alt="" />
                </div>
            </div>
        </div>
    )
}