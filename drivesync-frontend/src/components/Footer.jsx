import Logo from '../imgs/logo.png';

export function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={Logo} className="h-8" alt="Flowbite Logo" />
                            <span className="text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                    </div>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
