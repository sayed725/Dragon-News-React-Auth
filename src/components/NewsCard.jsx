import { FaShareAlt, FaRegEye , FaRegBookmark } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";



const NewsCard = ({singleNews:news }) => {
    console.log(news)
   
    return (
        <div className=" p-4 bg-white rounded-lg shadow-md mb-4">
      {/* Author Information */}
      <div className="flex items-center mb-4 bg-base-200 p-3">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto flex gap-4 text-2xl">
        <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="text-gray-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>

      {/* Thumbnail Image */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-gray-700 text-sm mb-4">
        {news.details.slice(0, 150)}...{" "}
        <span className="text-[#FF8C47]">Read More</span>
      </p>

      {/* Ratings and Views */}
      <div className="flex items-center justify-between text-gray-600 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
    );
};

export default NewsCard;