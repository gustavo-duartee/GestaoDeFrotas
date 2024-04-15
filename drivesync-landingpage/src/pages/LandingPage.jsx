import { Initial } from "../components/Initial";
import { Header } from '../components/Header';
import { Statics } from '../components/Statics';
import { AboutUs } from '../components/AboutUs';
import { Princing } from '../components/Pricing';
import { Plataforma } from "../components/Plataforma";
import { Footer } from "../components/Footer";
import { Quest } from "../components/Quest";

export function LandingPage() {
    return (
        <div>
            <Header />
            <Initial/>
            <AboutUs />
            <Plataforma />
            <Princing />
            <Quest />
            <Footer />
        </div>
        
    )
}