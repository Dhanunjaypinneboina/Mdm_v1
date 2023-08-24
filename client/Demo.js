<div className="font-bold ">₹{item.pPrice}.00</div>;
{
  /* WhisList Logic  */
}
<div className="absolute top-0 right-0 mx-1 my-1 md:mx-4">
  <svg
    onClick={(e) => isWishReq(e, item._id, setWlist)}
    className={`${
      isWish(item._id, wList) && "hidden"
    } w-10 h-10 md:w-4 md:h-4 cursor-pointer text-yellow-700 transition-all duration-300 ease-in`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
  <svg
    onClick={(e) => unWishReq(e, item._id, setWlist)}
    className={`${
      !isWish(item._id, wList) && "hidden"
    } w-10 h-10 md:w-6 md:h-6 cursor-pointer text-yellow-700 transition-all duration-300 ease-in`}
    fill="currentColor"
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
</div>;
