import src from '../assets/images/homepage/family-gathering-desktop.jpg'
export function PartD() {
    return (
        <div className="flex partD">
            <div className="img">
                <img src={src} alt=""/>
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