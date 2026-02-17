import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Home, Menu, X, Book, LogOut
} from 'lucide-react';


import Category from '../component/category';


export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { page } = useParams();




  const setNavigation = (page) => {
    navigate(`/dashboard/${page}`);
  };

  const goHome = () => {
    navigate('/');
  }





  const renderContent = () => {
    switch (page) {
      case 'categories':
        return <Category />;
      default:
        return <Category />;
    }
  };

  const sidebarContent = (
    <div className="h-full bg-white w-64 border-r px-4 py-6 flex flex-col justify-between">
      <a href='/'><h2 className='my-5 text-xl font-bold'>Home</h2></a>
      <div>

        <nav className="space-y-2">
          <div
            onClick={() => setNavigation("categories")} key={"categories"}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${"categories" === page || page === undefined
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            {<Home size={18} />}
            <span>Category</span>
          </div>
          <div
            onClick={() => setNavigation("add-course")} key={"add-course"}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${"add-course" === page
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            {<Book size={18} />}
            <span>Add Course</span>
          </div>
          <div
            onClick={() => setNavigation("my-courses")} key={"my-courses"}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${"my-courses" === page || page === 'manage-materials'
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            {<Book size={18} />}
            <span>My Courses</span>
          </div>
        </nav>
      </div>

      <div className="mt-auto px-3 py-2 bg-green-600 hover:bg-green-500 rounded-3xl flex items-center gap-3 text-sm text-white"
        onClick={goHome}
      >
        <Home size={18} />
        <span>Home</span>
      </div>
      <div className="px-3 mt-2 py-2 bg-red-600 hover:bg-red-500 rounded-3xl flex items-center gap-3 text-sm text-white"
        onClick={goHome}
      >
        <LogOut size={18} />
        <span>Sign out</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 z-30">{sidebarContent}</div>

      {/* Mobile Sidebar Toggle Button */}
      <div className="lg:hidden p-4 flex items-center justify-between border-b">
        <button onClick={() => setMobileOpen(true)}>
          <Menu size={24} />
        </button>
        <span className="font-bold text-lg">Udemy</span>
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50">
            <div className="p-4 flex justify-between items-center border-b">
              <span className="font-semibold text-gray-900 text-lg">Udemy</span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={20} />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}

      {renderContent()}
    </>
  );
}