const Menu = ({ children, imgUrl }) => {
  return (
    <div className="border rounded-md shadow-sm">
      <img src={imgUrl} alt="" className="rounded-t-md w-full h-48 object-cover" />
      <h1 className="p-3 font-semibold text-lg">{children}</h1>
    </div>
  );
};

export default Menu;