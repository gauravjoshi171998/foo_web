import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./about.css";

const About = () => {
  const dishes = [
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    "https://content3.jdmagicbox.com/comp/def_content_category/pizza-outlets-pizza-hut/pizza-outlets-pizza-hut-315-urrbg.jpg",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/6ec6dab5-2845-4517-b7f4-7b80f4bb6372_409369.JPG",
    "https://content3.jdmagicbox.com/comp/def_content_category/pizza-outlets-pizza-hut/pizza-outlets-pizza-hut-780-yw85f.jpg",

    "https://the-burgar-hut.tuckerfox.com.au/thumbnails/food-image/square/1024/the/the-burgar-hut.jpg?v=1669092822",
    "https://www.southernliving.com/thmb/H04pCVJ5bLAnwPs2hFCmpNs5Uec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ultimate-southern-burger_batch64_beauty01-86-b9c26e256dd34e39b6c0cfb0c02a9fef.jpg",
    "https://cdn.jwplayer.com/v2/media/UE3wsRB7/thumbnails/sAfXooUi.jpg",
    "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",

    "https://b.zmtcdn.com/data/pictures/1/18739011/978ed1e998518948130ab1062407cf95.jpg",
    "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/eryi4dgsmczpprnnvuvn",
    "https://b.zmtcdn.com/data/pictures/chains/2/21298222/6a7d1184ed1fcc8da0f5cefc51625c44.jpg?fit=around|960:500&crop=960:500;*,*",
    "https://b.zmtcdn.com/data/pictures/chains/8/21120708/d07b3d0bfe7e9b83bb2798b378ccde08.jpg?fit=around|750:500&crop=750:500;*,*",

    "https://www.sidechef.com/recipe/6df5d24c-24a1-417a-b317-f83d949447fc.jpg?d=1408x1120",
    "https://purendesi.in/wp-content/uploads/2024/12/Andhra-Style-Chicken-Biryani.jpg",
    "https://delishglobe.com/wp-content/uploads/2024/10/Mutton-Biryani.png",
    "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-biryani-awadhi-01.jpg",
  ];

  return (
    <div className="container py-5">
      {/* About Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">About Restaurant Pronto</h2>
        <div
          className="mx-auto mb-3"
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "#f97316",
          }}
        ></div>
        <p className="text-muted px-md-5">
          At Restaurant Pronto we offer meals of excellent quality and invite
          you to try our delicious food.
        </p>
        <p className="text-muted px-md-5">
          The key to our success is simple: providing quality consistent food
          that tastes great every single time. We pride ourselves on serving our
          customers delicious genuine dishes like: Pizza, Pasta, and more.
        </p>
        <p className="text-muted px-md-5">
          Eat delicious food. Grab a drink. But most of all, relax! We thank you
          from the bottom of our hearts for your continued support.
        </p>
      </div>

      {/* Food Section */}
      <div className="text-center mb-5">
        <h3 className="fw-bold">Italian Food From Pronto</h3>
        <div
          className="mx-auto mb-4"
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "#f97316",
          }}
        ></div>
      </div>

      {/* Image Gallery */}
      <div className="row g-4 image-container">
        {dishes.map((img, index) => (
          <div key={index} className="col-md-4 col-sm-6 img-dish">
            <img
              src={img}
              alt="Italian Dish"
              className="img-fluid rounded shadow-sm "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
