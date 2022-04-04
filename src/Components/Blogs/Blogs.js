
import React from 'react'

export const Blogs = () => {
  return (
    <div className='flex justify-evenly py-5 md:flex-none sm:flex-none'>
      <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is Context Api?</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Store the state in a Context value in the common ancestor component (called the Provider Component), and access it from as many components as needed (called Consumer Components), which can be nested at any depth under this ancestor. This solution has the same benefits as the Props solution, but because of what could be called “hierarchical scoping”, it has the added benefit that any component can access the state in any Context that is rooted above itself in React’s hierarchy, without this state needing to be passed down to it as props. React.js takes care of all the magic behind the scenes to make this work.
          When developing a React app, the primary situations where the React Context API really shines</p>
      </a>
      <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is Symantic tag?</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Semantic HTML (also called semantic markup) is HTML code that uses HTML tags to effectively describe the purpose of page elements. Semantic HTML code communicates the meaning of its elements to both computers and humans, which helps web browsers, search engines, assistive technologies, and human developers understand the components of a web page.

          The key to well-written semantic HTML is the use of semantic tags. Semantic HTML tags have names that tell the person or machine reading the code what exactly they’re meant to do.
        </p>
      </a>
    </div>
  )
}
