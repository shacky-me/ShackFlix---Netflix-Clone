import TrendingCards from "./TrendingCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const URL = "http://www.omdbapi.com/?apikey=ee41b2c";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchData = async (title) => {
    const response = await fetch(`${URL}&s=${title || "walking dead"}`);
    const Trendingdata = await response.json();
    setTrendingMovies(Trendingdata.Search);
    // console.log(Trendingdata);
  };
  // Fetch trending data from the API
  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    draggable: true,
    Mousewheel: true,
  };

  return (
    <div className="p-16">
      <div className="flex justify-start items-center text-white">
        <h1>Trending Now</h1>
      </div>
      <Slider {...settings} className="trending-slider">
        {trendingMovies?.length <= 10 ? (
          trendingMovies.map((data, index) => (
            <TrendingCards
              key={data.imdbID}
              image={
                data.Poster !== "N/A"
                  ? data.Poster
                  : "http://placeskull.com/200"
              }
              alternate={data.Title}
              id={index + 1}
              width={300}
              height={300}
            />
          ))
        ) : (
          <p>No trending movies available</p>
        )}
      </Slider>
    </div>
  );
};
export default Trending;
