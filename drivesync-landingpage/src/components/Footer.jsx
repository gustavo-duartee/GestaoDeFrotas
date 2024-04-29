import Logo from '../imgs/logo.png';

export function Footer() {
    return (
        <footer className=" left-0 w-full bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={Logo} className="h-12" alt="Flowbite Logo" />
                            <span className="text-xl font-semibold whitespace-nowrap dark:text-white">Drive Sync</span>
                        </a>
                    </div>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Sobre nós</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Políticas de Privacidade</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licença</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contatos</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
