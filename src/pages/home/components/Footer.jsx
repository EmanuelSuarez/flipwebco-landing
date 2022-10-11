import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-200">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href='https://flipwebco.com' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            version="1.1"
            viewBox="0 0 400 400"
            >
                <g fillRule="evenodd" stroke="none">
                    <path
                    className="fill-yellow-500"
                        d="M88.496 29.704c-6.194 6.2-8.096 8.337-8.096 9.1 0 .792 16.525 17.521 80.6 81.596 44.33 44.33 80.6 80.87 80.6 81.2 0 .33-36.27 36.87-80.6 81.2-64.788 64.787-80.6 80.798-80.6 81.613 0 1.435 15.382 16.787 16.821 16.787 1.107 0 179.979-178.494 179.979-179.599C277.2 200.813 97.984 21.6 97.196 21.6c-.332 0-4.247 3.647-8.7 8.104m67 .199c-4.772 4.777-8.296 8.616-8.296 9.039 0 .444 31.951 32.673 80.8 81.502 44.44 44.421 80.8 80.962 80.8 81.201 0 .24-36.36 36.771-80.8 81.182-48.161 48.129-80.8 81.039-80.8 81.472 0 1.001 16.015 16.901 17.023 16.901C165.15 381.2 344 202.526 344 201.599 344 200.943 164.852 21.6 164.196 21.6c-.222 0-4.137 3.737-8.7 8.303"
                    ></path>
                </g>
            </svg>
            <span className="ml-3 text-xl text-yellow-500">Flip Webco</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Flip Webco
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href='https://instagram.com/flipweb_co' target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
        </a>
        <a href='https://www.linkedin.com/company/flipweb-co/' target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
        </a>
        </span>
    </div>
</footer>
  )
}

export default Footer