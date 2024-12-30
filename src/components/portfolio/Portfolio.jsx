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
    desc: 'Shit is a balanced hybrid known for its earthy, skunky aroma and reliable effects. With THC levels between 15-20%, it offers a calming, uplifting high perfect for relaxation and casual conversations. Ideal for both novice and experienced users, Shit is a versatile strain with a classic cannabis flavor profile and smooth finish.',
    link: "/contact",
    price: "3g - $20",
    secondPrice: "10g - $60",
  },
  {
    id: 3,
    img: "/jealousRuntz.png",
    title: "Jealous Runtz",
    desc: 'Jealous Runtz is a balanced hybrid strain celebrated for its sweet, fruity flavor profile and calming effects. With THC levels ranging from 20-25%, it offers a euphoric yet relaxing high, making it perfect for unwinding. Its candy-like aroma and smooth smoke make it a favorite among connoisseurs seeking both flavor and potency.',
    link: "/contact",
    price: "3g - $20",
    secondPrice: "10g - $60",
  },

  {
    id: 4,
    img: "/jackHerer.png",
    title: "Jack Herer",
    desc: 'Jack Herer is a legendary sativa-dominant hybrid combining Haze, Northern Lights #5, and Shiva Skunk. With THC levels of 18-24%, it delivers a clear-headed, creative high. Known for its spicy pine aroma, Jack Herer is perfect for daytime use, offering uplifting effects and a rich history of awards and acclaim.',
    link: "/contact",
    price: "3g - $20",
    secondPrice: "10g - $60",
  },
  {
    id: 5,
    img: "/bananaKush.png",
    title: "Banana Kush",
    desc: 'Banana Kush is a smooth hybrid crafted from Ghost OG and Skunk Haze. Boasting THC levels between 16-22%, it offers a mellow, euphoric high with a sweet, banana-like aroma. Ideal for stress relief and creativity, this strain provides a soothing experience perfect for socializing or unwinding after a long day.',
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
        <motion.div style={{ display: "flex", justifyContent: "space-between",marginTop: "22px" }}>
          <div>
          <p style={{ color: "white", textDecoration:"underline" }}>{item.price}</p>
          <p style={{ color: "white", textDecoration:"underline" }}>{item.secondPrice}</p>
          </div>
          <button
            onClick={scrollToContact}
            style={{ backgroundColor: "white",boxShadow:"0 0 4px 0px white", fontWeight:"bold" }}
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
