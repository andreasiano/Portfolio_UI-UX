import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" class="bg-darkGrey font-teko rounded-lg m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href=''
              class="flex text-white text-2xl items-center mb-4 sm:mb-0"
            >
              ANDREA PENSIERI
            </a> 
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="https://flowbite.com/" class="hover:underline">
            Portfolio - Designed by Andrea S. Pensieri
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
