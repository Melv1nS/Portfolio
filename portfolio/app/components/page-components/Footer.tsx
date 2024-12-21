import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-primary-dark to-primary text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Melvin Sureshbabu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
