type SingleArticleProps = {
  image: string;
  tag: string;
  title: string;
  description: string;
  profile: string;
  name: string;
  date: string;
  time: string;
};

const SingleArticle = ({
  image,
  tag,
  title,
  description,
  profile,
  name,
  date,
  time,
}: SingleArticleProps) => {
  return (
    <section className="cardStyle">
      <img src={image} />
      <div className="flex flex-col gap-y-2 px-5">
        <h2 className="text-sm pl-2">{tag}</h2>
        <h1>{title}</h1>
        <p className="line-clamp-3 text-sm">{description}</p>
      </div>
      <div className="flex flex-row justify-around px-3 py-5 text-center items-center border-t">
        <div className="flex flex-row items-center gap-x-1 ">
          <img src={profile} className="w-8 object-cover border rounded-4xl" />
          <p className="text-xs">{name}</p>
        </div>
        <div className="flex flex-row items-center justify-center min-w-fit gap-x-1">
          <div className="flex flex-row items-center justify-center">
            <i className="fa-regular fa-calendar text-xs"></i>
            <p className="text-xs">{date}</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <i className="fa-regular fa-clock text-xs"></i>
            <p className="text-xs">{time}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleArticle;
