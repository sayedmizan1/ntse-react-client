import "./Search.scss";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/earbuds-prod-2.webp";
const Search = ({ setShowsearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
      setQuery(e.target.value);
  };

  let { data } = useFetch(
      `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
      data = null;
  }

  return (
    <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for Olympiad"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowsearch(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see Olympiad you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data?.data?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate("/product/" + item.id);
                                setShowsearch(false);
                            }}
                        >
                            <div className="img-container">
                                <img
                                    src={
                                        // process.env
                                        //     .REACT_APP_STRIPE_APP_DEV_URL +
                                        // item.attributes.img.data[0].attributes
                                        //     .url
                                        item.attributes.img.data.attributes.url
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.attributes.title}
                                </span>
                                <span className="desc">
                                    {item.attributes.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
};

export default Search;
