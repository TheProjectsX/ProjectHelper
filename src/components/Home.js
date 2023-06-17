import React from 'react'

const Home = () => {
  document.title = "Projects Helper"
  return (
    <div className='bg-gray-600 text-white p-10'>
      <div className='sm:w-1/2 mx-auto bg-gray-700 p-4 rounded-lg shadow-md shadow-gray-500'>
        <h1 className='text-2xl font-bold py-2 mb-4 underline underline-offset-8 decoration-gray-400'>Project Helper</h1>
        <p className='pb-1'>Project Helper is a Web App Built with React JS and Tailwind. This app Will Help you Create your Projects easily by Providing various Code Snippets.</p>
        <p className='pb-4'>Various Codebases are included here. We stored all the importent Code Snippets in one place.</p>
        
      <h2 className='text-xl font-semibold py-2 mb-4 underline underline-offset-8 decoration-gray-400'>Uses</h2>
      <p>We made Userfriendly UI so that it become easy to look for codes. You can choose your option through the Navbar or the Sidebar where the Links of your desire is Given!</p>

        <h2 className='text-xl font-semibold py-2 mb-4 underline underline-offset-8 decoration-gray-400'>Idea of Creating</h2>
        <p className='pb-4'>This Web App was Created for Personal use. But now Everyone can use it and Get the Help they need to Start a Project.</p>

        <h2 className='text-xl font-semibold py-2 mb-4 underline underline-offset-8 decoration-gray-400'>Supports</h2>
        <p className='pb-4'>We have Various Languanges supported. All are separated in <code>Frontend</code> <code>Framework</code> <code>Backend</code> etc Options.</p>

        
      </div>
    </div>
  )
}

export default Home
