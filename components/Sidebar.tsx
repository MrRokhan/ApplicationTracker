"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Pipeline", href: "/pipeline" },
    { label: "Add Job", href: "/jobs/new" },
  ];

  return (
    <aside className="hidden min-h-screen w-64 border-r border-gray-200 bg-white p-6 md:block">
      <h2 className="text-2xl font-bold">ApplicationTracker</h2>

      <nav className="mt-10 space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-3 font-medium transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="pt-4">
          <p className="px-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Coming Later
          </p>

          <div className="mt-3 space-y-2">
            <span className="block cursor-not-allowed rounded-lg px-4 py-3 text-gray-400">
              Resumes
            </span>
            <span className="block cursor-not-allowed rounded-lg px-4 py-3 text-gray-400">
              Interviews
            </span>
            <span className="block cursor-not-allowed rounded-lg px-4 py-3 text-gray-400">
              Analytics
            </span>
          </div>
        </div>
      </nav>
    </aside>
  );
}