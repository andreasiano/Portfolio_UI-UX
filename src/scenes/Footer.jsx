import React from 'react'

export default function Footer() {
  return (
    <footer id='contact' class="bg-darkGrey font-teko rounded-lg m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex text-white text-2xl items-center mb-4 sm:mb-0"
          >
            ANDREA PENSIERI
          </a>
          <ul class="flex text-lg flex-wrap items-center mb-6 font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="#"
                class="mr-4 text-white hover:text-gray-400 transition duration-500 md:mr-6 "
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                class="mr-4 text-white hover:text-gray-400 transition duration-500 md:mr-6"
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#"
                class="mr-4 text-white hover:text-gray-400 transition duration-500 md:mr-6 "
              >
                WORKS
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-white hover:text-gray-400 transition duration-500"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
