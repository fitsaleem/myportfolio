import './globals.css'

export const metadata = {
  title: 'FitCodding | Master Web3 Development, Blockchain, and Cloud Computing',
  description: 'FitCodding is your ultimate resource for mastering web development, computer science, and coding. Dive into the world of blockchain, explore web3 development, and unlock the potential of cloud computing with our comprehensive guides and tutorials.',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
          
          {/* Add the keywords meta tag here */}
          <meta name="keywords" content="Web Development, Computer Science, Coding Tutorials, Blockchain Technology, Web3 Development, Cloud Computing, JavaScript Programming, Next.js Tutorials, Blockchain Development, Cloud Services, Web Development Guides, Computer Science Lessons, Coding for Beginners, Advanced Coding Techniques, Blockchain for Beginners, Web3 Applications, Cloud Infrastructure, Full Stack Development, Frontend Development, Backend Development" />

          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>
          {children}

          
                    {/* Add the reCAPTCHA script here */}

          {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}

        </body>
      </html>
    </>
  )
}
