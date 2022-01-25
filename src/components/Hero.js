import React from "react";

import BaseButton from "./Button/BaseButton";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-flow-row-dense lg:grid-cols-5">
        <div className="relative lg:col-span-2 z-10 pb-8 bg-white">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <p className="mt-3 text-secondary_accent font-semibold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 mb-4">
                Lorem ipsum dolor
              </p>
              <h1 className="text-3xl text-primary_text tracking-normal font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                <span className="block xl:inline">Lorem ipsum dolor sit</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  amet consectetur
                </span>
              </h1>
              <p className="mt-2 text-secondary_text text-gray-500 sm:mt-4 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-lg lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0">
                  <BaseButton title="Shop now" type="primary" size="large" />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-5">
                  <BaseButton
                    title="Partner with us"
                    type="default"
                    size="large"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="relative lg:col-span-3 lg:pl-24 lg:pr-8 lg:py-8">
          <img
            className="w-full object-cover h-full lg:rounded-lg md-rounded-lg"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
