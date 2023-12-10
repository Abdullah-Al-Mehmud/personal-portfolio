const Header = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Projects</a>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar fixed z-10 text-white  bg-gradient-to-r from-[#9926f0f2] to-[#d122e3f2] md:px-20 py-3 shadow-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu font-bold text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-500 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold">Abdullah Al Mehmud</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal font-bold text-lg px-1">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
