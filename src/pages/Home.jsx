// import src from '../assets/imgs/profile-1.jpg'
import { Footer } from '../cmps/Footer'
import { PartA } from '../cmps/PartA'
import { PartB } from '../cmps/PartB'
import { PartC } from '../cmps/PartC'
import { PartD } from '../cmps/PartD'
import { PartE } from '../cmps/PartE'

export function Home() {

    return (
        <section className="main-container">
            <PartA />
            {/* <PartB /> */}
            <PartC />
            {/* <PartD /> */}
            <PartE />
            <Footer />
        </section>
    )
}