import Daniel from '../imgs/img-daniel.jpg';
import Mateus from '../imgs/img-mateus.png'

export function AboutUs() {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Conheça nosso time!</h2>
                    <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Somos estudantes de Sistemas de Informação pela Universidade Dom Bosco do Rio de Janeiro, com objetivo de ajudar empresas a otimizarem custos e contribuir com a Agenda 2030.</p>
                </div>
                <div className="grid gap-12 items-center md:grid-cols-3">
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src={Daniel} alt="daniel" loading="lazy" width="640" height="805"/>
                            <div>
                                <h4 className="text-2xl">Daniel C Peralba</h4>
                                <span className="block text-sm text-gray-500">Dev. Front-end e Mobile</span>
                            </div>
                    </div>
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667"/>
                            <div>
                                <h4 className="text-2xl">Gustavo Duarte</h4>
                                <span className="block text-sm text-gray-500">Dev. Back-end</span>
                            </div>
                    </div>
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src={Mateus} alt="woman" loading="lazy" width="1000" height="667"/>
                            <div>
                                <h4 className="text-2xl">Mateus Santos</h4>
                                <span className="block text-sm text-gray-500">Dev. Back-end</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
}