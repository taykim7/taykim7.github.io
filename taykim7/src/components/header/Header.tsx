export function Header() {
  return (
    <header className="w-full bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between py-3">
        <h1 className="text-xl font-semibold">lab</h1>

        <nav className="flex gap-4 text-gray-600">
          {/* <a href="/" className="hover:text-black">홈</a>
          <a href="/menu" className="hover:text-black">메뉴</a> */}
        </nav>
      </div>
    </header>
  );
}
