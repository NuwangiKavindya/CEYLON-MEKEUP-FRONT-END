import React from "react";
import { useNavigate } from "react-router-dom";


export default function MakeupUserProfile() {
  const navigate = useNavigate();  // ✅ create navigate function

  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-pink-700">My Profile</h1>
          <button className="px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700">
            Logout
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6 border border-pink-100">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-full bg-pink-200 flex items-center justify-center text-lg font-semibold text-pink-700">
                  NK
                </div>
                <div>
                  <p className="font-semibold">Nuwangi Kavindya</p>
                  <p className="text-sm text-pink-500">nuwangi@.com</p>
                  <p className="text-sm text-pink-500">+94 72345678</p>
                </div>
              </div>

              {/* Navigate on button click */}
              <button
                onClick={() => navigate("/editProfile")}
                className="mt-4 w-full py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
