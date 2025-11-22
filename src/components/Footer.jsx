import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {['About', 'Blog', 'Jobs', 'Press', 'Partners'].map((item) => (
            <div key={item} className="px-5 py-2">
              <a href="#" className="text-base text-gray-400 hover:text-white">
                {item}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2025 E-Commerce Shop, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer