const Pet = () => {
  return (
    <div className="w-full overflow-x-hidden fixed bottom-0 z-50">
      <div
        className="w-full animal-walk"
        style={{ transform: `translateX(3100px)` }}
      >
        <img
          className="chicken-walk w-10 h-10"
          src="/chicken.gif"
          alt="chicken animation"
        />
      </div>
    </div>
  );
};

export default Pet;
