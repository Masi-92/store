const Category = () => {

  const categories = [
    { name: 'coffee', imageUrl: 'https://source.unsplash.com/random?coffee' },
    { name: 'tea', imageUrl: 'https://source.unsplash.com/random?tea' },
    { name: 'cocktail', imageUrl: 'https://source.unsplash.com/random?cocktail' },

  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 py-2">
      
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <img
              src={category.imageUrl}
              className=" h-48 w-full object-cover border-solid rounded-md  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              alt={category.name}
            />
            <p className="absolute bottom-3 border-t bg-opacity-30 left-1/2 text-center rounded-md	border-b min-w-20 -translate-x-1/2 px-1 transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
              {category.name}
            </p>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Category;
