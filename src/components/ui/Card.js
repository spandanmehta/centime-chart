const Card = ({ children }) => {
  return (
    <div
      className='rounded-md bg-slate-100 shadow p-4 h-full flex justify-center items-center flex-col'
      data-testid='card'
    >
      {children}
    </div>
  );
};

export default Card;
