function Project({ title, price, location, image }) {
  return (
    <div className="relative flex-shrink-0 w-full sm:w-1/4">
      <img src={image} alt="Image Title" className="w-full h-auto mb-14" />
      <div className="absolute bg-white px-6 py-2 left-0 right-0 bottom-5 shadow-md mx-5">
        <h3 className="text-[25px]">{title}</h3>
        <p className="text-(--text-color)">{price}<span> | </span>{location}</p>
      </div>
    </div>
  );
}

export default Project;
