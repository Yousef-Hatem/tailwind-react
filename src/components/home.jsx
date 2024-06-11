import "./home.css";

export default function Home() {
  return (
    <>
      <div
        className="s-0 hero min-h-screen bg-base-200"
        style={{
          background: "url('/public/images/1.png') 100%",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">
              Concisely describe your product or service
            </h1>
            <p className="py-6">
              No need to get clever, Tell people exactly what you are offering,
              then use this space to communicate your key value proposition
            </p>
            <button className="btn btn-warning">ORDER NOW</button>
          </div>
        </div>
      </div>
      <div className="s-1 text-center">
        <div className="header">
          <h1 className="py-10">Here are some of the benefits of your offer</h1>
          <p>
            Explain what makes your product or service great. Talk about
            features in a way that highlights the real value people get out of
            them.
          </p>
        </div>
        <div className="items mt-10">
          <div className="item px-10">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"
              alt
            />
            <h2 className="mt-10">Benefit 1</h2>
            <p>
              For example, restaurants and bakeries could outline the health
              benefits of their all-natural ingredients.
            </p>
          </div>
          <div className="item px-10">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"
              alt
            />
            <h2 className="mt-10">Benefit 2</h2>
            <p>
              Florists and other small retailers might use this space to
              describe how their products make delightful, one-of-a-kind gifts.
            </p>
          </div>
          <div className="item px-10">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"
              alt
            />
            <h2 className="mt-10">Benefit 3</h2>
            <p>
              You could also add buttons to this section and share links to
              other products or available delivery methods.
            </p>
          </div>
        </div>
      </div>
      <div
        className="s-2 hero min-h-screen"
        style={{
          backgroundImage: "url(/public/images/2.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">What our customers say </h1>
            <h4 className="mb-5"> ,, </h4>
            <p className="mb-5">
              Share a real testimonial that hits some of your benefits (but
              isn't too sales-y).
            </p>
            <div className="img">
              <img
                style={{ margin: "auto" }}
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png"
                alt
              />
              <h1>REAL NAME</h1>
              <h1>NASSER</h1>
              <h1>⭐⭐⭐⭐⭐</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="s-3 py-10">
        <div className="card w-96 bg-base-100 shadow-xl mx-3">
          <figure>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Feature 1</h2>
            <p>
              Talk about some of the details your offer with a focus on the
              value people get back
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-3">
          <figure>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Feature 2</h2>
            <p>
              Talk about some of the details your offer with a focus on the
              value people get back
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-3">
          <figure>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Feature 3</h2>
            <p>
              Talk about some of the details your offer with a focus on the
              value people get back
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="s-4 py-10">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Some more information about your business
            </h2>
            <p>
              Share a Latte about yourselfas a business attes, or maybe desente
              whit maken sor product ar service unique Gre visitors bee more
              reason to care about vour offer and want
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          background: "url('/public/images/3.png')",
          backgroundSize: "100%",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              End with one final call to action
            </h1>
            <p className="py-6">
              This is your last shot at converting someone. Remind them about
              the benetits of your otter and encourage them to act row.
            </p>
            <button className="btn btn-warning">ORDER NOW</button>
          </div>
        </div>
      </div>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>FreshGoods</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            @2020 Insert Name Here.All rights reserved
          </div>
        </nav>
      </footer>
    </>
  );
}
