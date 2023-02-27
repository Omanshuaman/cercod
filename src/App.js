import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (burger.length && menu.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (close.length) {
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  });
  return (
    <div>
      <body class="bg-blue-500">
        <nav class="relative px-4 py-4 flex justify-between items-center bg-black ">
          <a class="text-3xl font-bold leading-none">
            <img
              class="h-10"
              src="https://vecros.com/static/media/logo.ffda51cadb3fb4901613.png"
              alt="logo"
            />
          </a>
          <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                class="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a class="text-sm text-gray-400 hover:text-gray-500">
                Jetpix Autonomy
              </a>
            </li>
            <li class="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a class="text-sm text-blue-600 font-bold">Products</a>
            </li>
            <li class="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a class="text-sm text-gray-400 hover:text-gray-500">Solutions</a>
            </li>
            <li class="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a class="text-sm text-gray-400 hover:text-gray-500">Resources</a>
            </li>
            <li class="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a class="text-sm text-gray-400 hover:text-gray-500">Support</a>
            </li>
            <li class="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a class="text-sm text-gray-400 hover:text-gray-500">About</a>
            </li>
          </ul>
        </nav>

        <section class="pt-24 bg-white">
          <div class="px-12 mx-auto max-w-7xl">
            <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
              <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                  ATHERA
                </span>{" "}
              </h1>
              <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                Smarter Drone and Scalable Operations
              </p>
              <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                  Watch Video
                  <svg
                    class="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full mx-auto mt-20 text-center md:w-10/12">
              <div class="relative z-0 w-full mt-8">
                <div class="relative overflow-hidden shadow-2xl">
                  <div class="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl">
                    <div class="flex space-x-1.5">
                      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                      <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                  <img src="https://vecros.com/static/media/auto-ops.2ffceb9014c575eaa003.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="relative bg-blueGray-200 pt-8 pb-6">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap text-left lg:text-left">
              <div class="w-full lg:w-6/12 px-4">
                <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                  We are pushing state of the art technology to combine machine
                  intelligence with robust & reliable systems for solving every
                  day problems in ways no one has ever imagined. days.
                </h5>
                <div class="mt-6 lg:mb-0 mb-6">
                  <button
                    class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </button>
                  <button
                    class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i class="fab fa-dribbble"></i>
                  </button>
                  <button
                    class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="flex flex-wrap items-top mb-6">
                  <div class="w-full lg:w-4/12 px-4 ml-auto">
                    <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul class="list-unstyled">
                      <li>
                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Github
                        </a>
                      </li>
                      <li>
                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul class="list-unstyled">
                      <li>
                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-6 border-blueGray-300" />
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
