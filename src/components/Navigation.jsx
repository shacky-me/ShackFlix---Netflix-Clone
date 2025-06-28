import Button from "./Button";
const Navigation = () => {
  return (
    <header className="p-4 md:px-30 md:py-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-extrabold">
          <h1 className="text-red-600 font-bebas text-2xl tracking-widest uppercase">
            ShackFlix
          </h1>
        </div>

        <div className="flex">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
