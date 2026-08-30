export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="grid grid-cols-3 gap-4 justify-center items-center text-center  p-4 rounded-lg text-2xl mb-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
