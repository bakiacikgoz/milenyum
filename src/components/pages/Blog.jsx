import React,{useState}from 'react'
import MainLayout from '../layout/MainLayout'
import RichTextEditor from '../common/RichTextEditor';
function Blog() {

  const [content, setContent] = useState('');

  const handleContentChange = (data) => {
    setContent(data);
  };
  return (
    <MainLayout>
      <div className='bg-white  dark:bg-slate-800 rounded-lg p-5 shadow-lg'>
        <h1 className='text-black dark:text-white text font-bold border-b-2 dark:border-b-slate-900  border-slate-800 pb-2 uppercase'>Blog Ekle</h1>
      <div className="lg:container lg:py-4 lg:mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full w-12/12 lg:w-6/12 p-1">
            <div class="mb-5">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Başlığı</label>
              <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
            </div>
          </div>
          <div className="w-full w-12/12 lg:w-6/12 p-1">
            <div class="mb-5">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meta Keywords</label>
              <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full w-12/12 lg:w-12/12 p-1">

            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meta Açıklama</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

          </div>
          <div className="w-full w-12/12 lg:w-12/12 p-1 pt-5">

            <RichTextEditor content={content} handleContentChange={handleContentChange} />

          </div>
        </div>
      </div>
      </div>
    </MainLayout>
  )
}

export default Blog