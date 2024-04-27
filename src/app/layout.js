import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Saleem Raza | Software Engineer | Next.js Developer | Web3 Developer | Devops Engineer',
  description: 'Hi, A passionate Web3 developer',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
        <title>
            FitCodding | Master Web3 Development and Cloud Computing
        </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="nUs1sZlixkttFP_uk2dtojO4an6Aw90hyysa7U08hk8" />
          
          {/* Add the keywords meta tag here */}
          <meta property="og:url" content="https://www.fitcodding.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="FitCodding | Master Web3 Development and Cloud Computing"/>
        <meta property="og:description" content="FitCodding is your ultimate resource for mastering web development, computer science, and coding. Dive into the world of blockchain, explore web3 development, and unlock the potential of cloud computing with our comprehensive guides and tutorials."/>
        <meta property="og:image" content="https://vercel.com/fitsaleem/saleem-raza/BKw5PAi37f4PfDGdMiC4iuk2nmW6/source?f=out%2Fimages%2Fhero-image1.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="fitcodding.com"/>
        <meta property="twitter:url" content="https://www.fitcodding.com" />
        <meta name="twitter:title" content="FitCodding | Master Web3 Development, Blockchain, and Cloud Computing"/>
        <meta name="twitter:description" content="FitCodding is your ultimate resource for mastering web development, computer science, and coding. Dive into the world of blockchain, explore web3 development, and unlock the potential of cloud computing with our comprehensive guides and tutorials." />
        <meta name="twitter:image" content="https://vercel.com/fitsaleem/saleem-raza/BKw5PAi37f4PfDGdMiC4iuk2nmW6/source?f=out%2Fimages%2Fhero-image1.png"/>
          <meta
          name="description"
          content="FitCodding is your ultimate resource for mastering web development, computer science, and coding. Dive into the world of blockchain, explore web3 development, and unlock the potential of cloud computing with our comprehensive guides and tutorials."
        />
          <meta name="keywords" content="Web Development, Computer Science, Coding Tutorials, Blockchain Technology, Web3 Development, Cloud Computing, JavaScript Programming, Next.js Tutorials, Blockchain Development, Cloud Services, Web Development Guides, Computer Science Lessons, Coding for Beginners, Advanced Coding Techniques, Blockchain for Beginners, Web3 Applications, Cloud Infrastructure, Full Stack Development, Frontend Development, Backend Development" />

          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>
        <SpeedInsights/>
          {children}

          
                    {/* Add the reCAPTCHA script here */}

          {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}

        </body>
      </html>
    </>
  )
}
