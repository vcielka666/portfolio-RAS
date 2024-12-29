import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";


const items = [
  {
    id: 1,
    img: "/ODB.png",
    title: "O.D.B",
    desc: 'O.D.B. (Old Dirty Biker) is a hybrid strain from Karma Genetics, combining Biker Kush and Exodus Cheese. With THC levels between 20-25%, it delivers a euphoric, relaxing high. Expect earthy diesel and cheesy funk flavors, with subtle citrus undertones. Perfect for stress relief, creativity, and appetite stimulation, O.D.B. is a potent, flavorful choice for seasoned users.',
    link: "/#contact",
    price: "3g - $20",
    secondPrice: "10g - $60",
  },
  {
    id: 2,
    img: "/shit.png",
    title: "Shit",
    desc: 'Shit is a classic cannabis strain celebrated for its balanced effects and skunky, earthy aroma. With THC levels around 15-20%, it provides a calming yet uplifting high, ideal for relaxation and casual conversations. Perfect for novice and seasoned users alike, Shit is a reliable choice for those seeking a timeless cannabis experience.',
    link: "/contact",
    price: "3g - $20",
    secondPrice: "10g - $60",
  },
  {
    id: 3,
    img: "/ghostTrainHaze.png",
    title: "Ghost Train Haze",
    desc: "First bred by Rare Dankness, Ghost Train Haze is a sativa cross of Ghost OG and Neville’s Wreck. Unlike typical sativas, Ghost Train Haze grows dense buds blanketed in white, crystal-capped trichomes. With a sour citrus and floral aroma, Ghost Train Haze delivers a potent dose of THC to knock out pain, depression, and appetite loss, but patients prone to anxiety should steer clear of this heavy-hitter. Low doses are conducive to concentration and creativity, but you may notice some cerebral haziness as you smoke more. ",
    link: "/contact",
    price: "3g - $20",
    secondPrice: "10g - $60",
  },
  {
    id: 4,
    img: "/jackHerer.png",
    title: "Jack Herer",
    desc: 'Jack Herer, also known as "The Jack" or "Premium Jack," is a renowned sativa-dominant marijuana strain named after the marijuana activist and author of The Emperor Wears No Clothes. Created by Sensi Seeds in the 1990s, it combines a Haze hybrid with Northern Lights #5 and Shiva Skunk to deliver cerebral elevation and heavy resin production. Known for its spicy, pine-scented aroma, Jack Herer is celebrated for its uplifting, creative, and blissful effects. Recognized as a medical-grade strain in Dutch pharmacies, it has won numerous awards for its quality and potency.'
,   link: "/contact",
price: "3g - $20",
secondPrice: "10g - $60",
  },
  {
    id: 5,
    img: "/bananaKush.png",
    title: "Banana Kush",
    desc: "Banana kush is a hybrid marijuana strain made by crossing Ghost OG and Skunk Haze. The result is a strain that tastes and smells like a bushel of fresh bananas. Banana Kush tends to provide a mellow buzz alongside a relaxed sense of euphoria. A great choice when dealing with stress or depression, Banana Kush also helps stimulate your creative juices and can help you remain talkative in social settings.",
    link: "/contact",
    price: "3g - $20",
    secondPrice: "10g - $60",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item, scrollToContact }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={{
          initial: { x: -500, y: 500, opacity: 0 },
          animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt={item.title} />
      </motion.div>
      <motion.div
        variants={{
          initial: { x: 500, y: 500, opacity: 0 },
          animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              staggerChildren: 0.05,
            },
          },
        }}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1>{item.title}</motion.h1>
        <motion.p>{item.desc}</motion.p>
        <motion.div>
          <p style={{ color: "white", textDecoration:"underline" }}>{item.price}</p>
          <p style={{ color: "white", textDecoration:"underline" }}>{item.secondPrice}</p>
          <button
            onClick={scrollToContact}
            style={{ marginTop: "22px", backgroundColor: "white",boxShadow:"0 0 4px 0px white", fontWeight:"bold" }}
          >
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};


const Portfolio = ({scroll}) => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} scrollToContact={scroll} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
