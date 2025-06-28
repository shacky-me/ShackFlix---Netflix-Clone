const TrendingCards = ({ image, alternate, id, width, height }) => {
  return (
    <div>
      <div className="relative gap-0">
        <img
          className="rounded-md mt-4 cursor-pointer"
          src={image}
          alt={alternate}
          width={width}
          height={height}
        />
        <div className="absolute bottom-0 transform -translate-x-3 translate-y-4">
          <h2 className="text-black text-7xl text-stroke-white font-bold">
            {id}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default TrendingCards;
