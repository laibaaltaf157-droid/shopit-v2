import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../layout/Loader";
import { toast } from "react-hot-toast";
import MetaData from "../layout/MetaData";
import { useOrderDetailsQuery } from "../../redux/api/orderApi";

const OrderDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useOrderDetailsQuery(id);
  const order = data?.order || {};

  const {
    shippingInfo = {},
    orderItems = [],
    paymentInfo = {},
    user = {},
    totalAmount = 0,
    orderStatus = "",
    createdAt,
  } = order;

  const isPaid = paymentInfo?.status === "paid";

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message || "Failed to load order details");
      console.error("Order Details Error:", error);
    }
  }, [error]);

  if (isLoading) return <Loader />;

  if (!order?._id) {
    return <p className="text-center mt-5">No order found with this ID.</p>;
  }

  return (
    <>
      <MetaData title={"Order Details"} />
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-9 mt-5 order-details">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-5 mb-4">Your Order Details</h3>
            <a className="btn btn-success" href={`/invoice/order/${order?._id}`}>
              <i className="fa fa-print"></i> Invoice
            </a>
          </div>

          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th scope="row">ID</th>
                <td>{order?._id}</td>
              </tr>
              <tr>
                <th scope="row">Status</th>
                <td className={orderStatus.includes("Delivered") ? "greenColor" : "redColor"}>
                  <b>{orderStatus}</b>
                </td>
              </tr>
              <tr>
                <th scope="row">Date</th>
                <td>{createdAt ? new Date(createdAt).toLocaleString("en-US") : "N/A"}</td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-5 mb-4">Shipping Info</h3>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{user?.name || "N/A"}</td>
              </tr>
              <tr>
                <th scope="row">Phone No</th>
                <td>{shippingInfo?.phoneNo || "N/A"}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td>
                  {shippingInfo?.address || ""} {shippingInfo?.city || ""}{" "}
                  {shippingInfo?.zipCode || ""} {shippingInfo?.country || ""}
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-5 mb-4">Payment Info</h3>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th scope="row">Status</th>
                <td className={isPaid ? "greenColor" : "redColor"}>
                  <b>{paymentInfo?.status || "N/A"}</b>
                </td>
              </tr>
              <tr>
                <th scope="row">Method</th>
                <td>{order?.paymentMethod || "N/A"}</td>
              </tr>
              <tr>
                <th scope="row">Stripe ID</th>
                <td>{paymentInfo?.id || "Nill"}</td>
              </tr>
              <tr>
                <th scope="row">Amount Paid</th>
                <td>${totalAmount}</td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-5 my-4">Order Items:</h3>
          <hr />
          {orderItems.length > 0 ? (
            orderItems.map((item, idx) => (
              <div className="row my-5" key={idx}>
                <div className="col-4 col-lg-2">
                  <img src={item?.image} alt={item?.name} height="45" width="65" />
                </div>
                <div className="col-5 col-lg-5">
                  <Link to={`/products/${item?.product}`}>{item?.name}</Link>
                </div>
                <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                  <p>${item?.price}</p>
                </div>
                <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                  <p>{item?.quantity} Piece(s)</p>
                </div>
              </div>
            ))
          ) : (
            <p>No items in this order.</p>
          )}
          <hr />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
