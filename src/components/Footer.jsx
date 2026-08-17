import React from "react";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8f7f2] px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">

        <p className="text-sm text-slate-500">
          © 2026 CareerCircle. All rights reserved.
        </p>

        <p className="text-sm text-slate-500">
          Built with ❤️ by{" "}
          <span className="font-semibold text-[#102a43]">
            Rahul Kumar
          </span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;