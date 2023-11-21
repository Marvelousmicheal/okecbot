import React, { useState } from "react";

function CookiesToast() {
  const [accept, setAccept] = useState(false);

  function handleClick() {
    if (accept === false) {
      setAccept(true);
    } else {
      setAccept(false);
    }
  }
  
  return (
    <>
      <main className={`bg-white text-black custom-transition  flex items-center fixed bottom-3 right-3 rounded-xl p-3 gap-2 text-sm font-medium z-50 ${accept ? "translate-x-[500px] opacity-0":"translate-x-0 opacity-1"}`}>
        <div className="text-2xl wave">👋</div>
        <div>
          <main className="font-medium mb-2">
            Hey there, this <span className="text-blue-700">website</span> uses{" "}
            <span className="text-blue-700">cookies</span> for better experience
          </main>
          <main className="flex gap-1">
            <button
              onClick={handleClick}
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900 custom-transition"
            >
              Accept
            </button>
            <button    onClick={handleClick} className="custom-transition px-4 py-2 rounded-md hover:bg-red-600 hover:text-white">
              Cancel
            </button>
          </main>
        </div>
      </main>
    </>
  );
}

export default CookiesToast;
