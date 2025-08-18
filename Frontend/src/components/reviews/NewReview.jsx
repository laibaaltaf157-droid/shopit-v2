import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { useSubmitReviewMutation } from "../../redux/api/productsApi";
import { toast } from "react-hot-toast";

const NewReview = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitReview, { isLoading: isSubmitting, error: submitError, isSuccess }] =
    useSubmitReviewMutation();

  useEffect(() => {
    if (submitError) {
      toast.error(submitError?.data?.message || "Error submitting review");
    }

    if (isSuccess) {
      toast.success("Review Posted");
      setRating(0);
      setComment("");
      // Close modal programmatically if you want (optional)
      const modalElement = document.getElementById("ratingModal");
      if (modalElement) {
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();
      }
    }
  }, [submitError, isSuccess]);

  const submitHandler = () => {
    if (rating === 0) {
      toast.error("Please provide a rating");
      return;
    }
    if (comment.trim() === "") {
      toast.error("Please enter a comment");
      return;
    }

    submitReview({ rating, comment, productId });
  };

  return (
    <div>
      {/* Always show the button for now */}
      <button
        id="review_btn"
        type="button"
        className="btn btn-primary mt-4"
        data-bs-toggle="modal"
        data-bs-target="#ratingModal"
      >
        Submit Your Review
      </button>

      <div className="row mt-2 mb-5">
        <div className="rating w-50">
          <div
            className="modal fade"
            id="ratingModal"
            tabIndex="-1"
            aria-labelledby="ratingModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ratingModalLabel">
                    Submit Review
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <StarRatings
                    rating={rating}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    name="rating"
                    changeRating={(newRating) => setRating(newRating)}
                  />

                  <textarea
                    name="review"
                    id="review"
                    className="form-control mt-4"
                    placeholder="Enter your comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                  ></textarea>

                  <button
                    id="new_review_btn"
                    className="btn btn-primary w-100 my-4 px-4"
                    onClick={submitHandler}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReview;
