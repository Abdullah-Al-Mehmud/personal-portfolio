const Project1 = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Globe News</h2>
          <p className="font-bold">
            This is a Full Stack News Portal Website.You also login and logout
            to our website and also post articles and read articles.There is an
            admin panel also to manage content.For full information visit
            github.
          </p>
          <p className="mt-2 font-bold">
            Tech Used :
            React,nodeJs,ExpressJs,Mongoose,TailwindCss,React-Router,Axios
          </p>
          <div className="mt-3">
            <div>
              <a href="https://globenews-f1176.web.app/" target="blank">
                Live Preview
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
