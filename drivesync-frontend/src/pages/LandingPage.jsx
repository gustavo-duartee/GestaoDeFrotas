import { Initial } from "../components/Initial";
import { Header } from '../components/Header';
import { Statics } from '../components/Statics';
import { AboutUs } from '../components/AboutUs';
import { Princing } from '../components/Pricing';
import { Plataforma } from "../components/Plataforma";
import { Footer } from "../components/Footer";

export function LandingPage() {
    return (
        <div>
            <Header />
            <Initial/>
            <Statics />
            <AboutUs />
            <Plataforma />
            <Princing />
        </div>
        
    )
}