import React from "react";
import MainLayout from "../../layout/MainLayout";
import Categories from "./Categories";

function CategoryAdd() {
  return (
    <>
    <MainLayout>
      <div className="bg-white  dark:bg-slate-800 rounded-lg p-5 shadow-lg">
        <h1 className="text-black dark:text-white text font-bold border-b-2 dark:border-b-slate-900  border-slate-800 pb-2 uppercase">
          Kategori Ekle
        </h1>
        <div className="lg:container lg:py-4 lg:mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full w-12/12 lg:w-6/12 p-1">
              <div className="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kategori Adı
                </label>
                <input
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full w-12/12 ">
              <button
                href="#"
                className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800"
              >
                Kategori Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
      </MainLayout>
    </>
  );
}

export default CategoryAdd;
