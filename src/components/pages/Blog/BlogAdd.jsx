import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import RichTextEditor from "../../common/RichTextEditor";
function BlogAdd() {
  const [content, setContent] = useState("");

  const handleContentChange = (data) => {
    setContent(data);
  };
  return (
    <MainLayout>
      <div className="bg-white  dark:bg-slate-800 rounded-lg p-5 shadow-lg">
        <h1 className="text-black dark:text-white text font-bold border-b-2 dark:border-b-slate-900  border-slate-800 pb-2 uppercase">
          Blog Ekle
        </h1>
        <div className="lg:container lg:py-4 lg:mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full w-12/12 lg:w-6/12 p-1">
              <div className="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Blog Başlığı
                </label>
                <input
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
              </div>
            </div>
            <div className="w-full w-12/12 lg:w-6/12 p-1">
              <div className="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Meta Keywords
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
            <div className="w-full w-12/12 lg:w-12/12 p-1">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Meta Açıklama
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="w-full w-12/12 lg:w-12/12 p-1 pt-5">
              <RichTextEditor
                content={content}
                handleContentChange={handleContentChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full w-12/12 pt-5">
              <div className="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Tıkla ve yükle</span> veya da sürükle bırak!
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG ve JPG (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
              <div className="w-full w-12/12 pt-4">
                <button href="#" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800">Blog Ekle</button>                
              </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default BlogAdd;
