import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white">
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <aside className="w-64 bg-[#0F172A] border-r border-zinc-800 p-6 flex flex-col">
            <h1 className="text-2xl font-bold mb-10">🚀 CoreStack</h1>

            <nav className="space-y-4 text-zinc-400">
              <Link href="/dashboard" className="block hover:text-white transition">Dashboard</Link>
              <Link href="/ai" className="block hover:text-white transition">AI Chat</Link>
              <Link href="/admin" className="block hover:text-white transition">Admin</Link>
              <Link href="/billing" className="block hover:text-white transition">Billing</Link>
            </nav>

            <div className="mt-auto text-xs text-zinc-500 pt-10">
              Production SaaS Demo
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 p-10">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}