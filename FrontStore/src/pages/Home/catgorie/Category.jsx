const Category = () => {

  const categories = [
    { name: 'coffee', imageUrl: 'https://source.unsplash.com/random?coffee' },
    { name: 'tea', imageUrl: 'https://source.unsplash.com/random?tea' },
    { name: 'cocktail', imageUrl: 'https://source.unsplash.com/random?cocktail' }
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 py-2">
        {/* Durchlaufe das Array der Kategorien und rendere jedes Element */}
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <img
              src={category.imageUrl}
              className="w-full h-48 object-cover"
              alt={category.name}
            />
            <button className="absolute bottom-3 left-1/2 -translate-x-1/2 p-1 border-b-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md">
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
