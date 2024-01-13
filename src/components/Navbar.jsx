import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSearchExpand, setIsSearchExpand] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setIsSearchExpand(!isSearchExpand);

    // setSearchQuery('');
    // setIsSearchExpand(false);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
     setSearchQuery();
      console.log("Performing search:", e.target.value);
    }
  };

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResults(results);
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setSearchQuery(value);
    fetchData(value);
  };


  return (
    <>
      <div className="navbar bg-base-100 font-bold fixed top-0 z-50">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">HangEase Haven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              {" "}
              <details>
                <summary>HAMMOCKS</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>HANGERS</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>QUIZ</a>
            </li>
            <li>
              <a>OUR STORY</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">

          <div className="input-group ">
            <div
              className={`searchBarContainer flex items-center ${
                isSearchExpand ? "ml-4" : ""
              } transition-all ease-in-out duration-300`}
            >
              {isSearchExpand && (
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => handleChange(e.target.value)}
                  className=" p-2 outline-none bg-warning-light text-black rounded-md border-b"
                  onKeyPress={handleEnterPress}
                />
              )}
              <div
                className={`btn btn-ghost btn-circle cursor-pointer transform transition-transform duration-300 ${
                  isSearchExpand ? "rotate-0" : ""
                }`}
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={handleSearch}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            {/* <div className="searchResults"> results </div> */}
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    <Link to="/cart">View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
