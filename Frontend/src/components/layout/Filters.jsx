import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPriceQueryParams } from "../../helpers/helpers";
import { PRODUCT_CATEGORIES } from "../../constants/constants";
import StarRatings from "react-star-ratings";

const Filters = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // ✅ keep it in state

  const queryMin = searchParams.get("min");
  const queryMax = searchParams.get("max");

  useEffect(() => {
    if (queryMin) setMin(queryMin);
    if (queryMax) setMax(queryMax);
  }, [queryMin, queryMax]); // ✅ clean and warning-free

  // Handle Category & Ratings filter
  const handleClick = (checkbox) => {
    const checkboxes = document.getElementsByName(checkbox.name);

    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
    });

    const newParams = new URLSearchParams(searchParams.toString());

    if (!checkbox.checked) {
      newParams.delete(checkbox.name);
    } else {
      newParams.set(checkbox.name, checkbox.value);
    }

    const path = window.location.pathname + "?" + newParams.toString();
    navigate(path);
  };

  // Handle price filter
  const handleButtonClick = (e) => {
    e.preventDefault();

    let newParams = getPriceQueryParams(searchParams, "min", min);
    newParams = getPriceQueryParams(newParams, "max", max);

    const path = window.location.pathname + "?" + newParams.toString();
    navigate(path);
  };

  const defaultCheckHandler = (checkboxType, checkboxValue) => {
    const value = searchParams.get(checkboxType);
    return checkboxValue === value;
  };

  return (
    <div className="border p-3 filter">
      <h3>Filters</h3>
      <hr />
      <h5 className="filter-heading mb-3">Price</h5>
      <form id="filter_form" className="px-2" onSubmit={handleButtonClick}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Min ($)"
              name="min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Max ($)"
              name="max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              GO
            </button>
          </div>
        </div>
      </form>
      <hr />
      <h5 className="mb-3">Category</h5>

      {PRODUCT_CATEGORIES?.map((category) => (
        <div className="form-check" key={category}>
          <input
            className="form-check-input"
            type="checkbox"
            name="category"
            id={`cat-${category}`}
            value={category}
            defaultChecked={defaultCheckHandler("category", category)}
            onClick={(e) => handleClick(e.target)}
          />
          <label className="form-check-label" htmlFor={`cat-${category}`}>
            {category}
          </label>
        </div>
      ))}

      <hr />
      <h5 className="mb-3">Ratings</h5>

      {[5, 4, 3, 2, 1].map((rating) => (
        <div className="form-check" key={rating}>
          <input
            className="form-check-input"
            type="checkbox"
            name="ratings"
            id={`rating-${rating}`}
            value={rating}
            defaultChecked={defaultCheckHandler("ratings", rating.toString())}
            onClick={(e) => handleClick(e.target)}
          />
          <label className="form-check-label" htmlFor={`rating-${rating}`}>
            <StarRatings
              rating={rating}
              starRatedColor="#ffb829"
              numberOfStars={5}
              name="rating"
              starDimension="21px"
              starSpacing="1px"
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
