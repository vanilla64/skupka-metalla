import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from "framer-motion"
import styles from "../../styles/Header.module.sass"
import { sliderImages as images } from "../../constants/sliderImages"
import { wrap } from "popmotion"
import { slides } from "../../constants/slides"
import HeaderSlide from "./HeaderSlide"

function HeaderSlider() {
  const [[page, direction], setPage] = useState([0, 0])

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     paginate(1)
  //   }, 5000)
  //   // eslint-disable-next-line
  // }, [page])

  const slidesIndex = wrap(0, slides.length, page);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className={styles.sliderContainer}
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            repeat: Infinity,
            repeatDelay: 1
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          { slides[slidesIndex] }
        </motion.div>

        {/*<motion.img*/}
        {/*  className={styles.sliderImage}*/}
        {/*  key={page}*/}
        {/*  src={images[imageIndex]}*/}
        {/*  custom={direction}*/}
        {/*  variants={variants}*/}
        {/*  initial="enter"*/}
        {/*  animate="center"*/}
        {/*  exit="exit"*/}
        {/*  transition={{*/}
        {/*    x: { type: "spring", stiffness: 300, damping: 30 },*/}
        {/*    opacity: { duration: 0.3 }*/}
        {/*  }}*/}
        {/*  drag="x"*/}
        {/*  dragConstraints={{ left: 0, right: 0 }}*/}
        {/*  dragElastic={1}*/}
        {/*  onDragEnd={(e, { offset, velocity }) => {*/}
        {/*    const swipe = swipePower(offset.x, velocity.x);*/}

        {/*    if (swipe < -swipeConfidenceThreshold) {*/}
        {/*      paginate(1);*/}
        {/*    } else if (swipe > swipeConfidenceThreshold) {*/}
        {/*      paginate(-1);*/}
        {/*    }*/}
        {/*  }}*/}
        {/*/>*/}
      </AnimatePresence>

      <div className={styles.prev} onClick={() => paginate(-1)}></div>
      <div className={styles.next} onClick={() => paginate(1)}></div>
    </>
  )
}

export default HeaderSlider
