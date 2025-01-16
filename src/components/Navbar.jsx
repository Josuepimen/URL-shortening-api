function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Shortly</h1>
      <ul className="flex space-x-4">
        <li><a href="#features" className="hover:text-gray-400">Features</a></li>
        <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
        <li><a href="#resources" className="hover:text-gray-400">Resources</a></li>
      </ul>
      <div className="flex space-x-4">
        <button className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded">Login</button>
        <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;