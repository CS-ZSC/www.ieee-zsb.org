import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import React, { Dispatch, useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Icon } from "@iconify/react";
import { useWindowType } from "@/hooks/use-window-type";
import Heading from "@/components/ui/internal/heading";
import type { NewsItem } from "@/data/news";
import NewsCard from "@/components/ui/internal/news/news-card";
import Description from "@/components/ui/internal/news/description";
import Tag from "./tag";
import ButtonLink from "./button-link";
import ImageBox from "./news/image-box";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

interface CarouselProps {
  newsItems: NewsItem[];
  currentIndex: number;
  setCurrentIndex: Dispatch<React.SetStateAction<number>>;
  direction: "left" | "right";
  handleNext: () => void;
  handlePrev: () => void;
  handleDotRight: (index: number) => void;
  handleDotLeft: (index: number) => void;
}

export function Carousel({ newsItems }: { newsItems: NewsItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const { isDesktop } = useWindowType();

  newsItems = newsItems.filter((item) => item.homeItem == true);

  function handleNext() {
    setDirection("right");
    setCurrentIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  }

  function handlePrev() {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  }

  function handleDotRight(index: number) {
    setDirection("right");
    setCurrentIndex(index);
  }

  function handleDotLeft(index: number) {
    setDirection("left");
    setCurrentIndex(index);
  }

  return (
    <>
      {isDesktop ? (
        <FullCarousel
          newsItems={newsItems}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          direction={direction}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleDotRight={handleDotRight}
          handleDotLeft={handleDotLeft}
        />
      ) : (
        <SmallCarousel
          newsItems={newsItems}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          direction={direction}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleDotRight={handleDotRight}
          handleDotLeft={handleDotLeft}
        />
      )}
    </>
  );
}

const FlexMotion = motion.create(Flex);

function FullCarousel({
  newsItems,
  currentIndex,
  setCurrentIndex,
  direction,
  handleNext,
  handlePrev,
  handleDotRight,
  handleDotLeft,
}: CarouselProps) {
  const { isDesktop } = useWindowType();
  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentIndex((pv) => {
        if (pv === newsItems.length - 1) return 0;
        return pv + 1;
      });
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [newsItems.length, setCurrentIndex]);

  return (
    <Flex
      flexDirection="column"
      position="relative"
      overflow="hidden"
      rounded="2xl"
      border="1px solid"
      borderColor="primary-3"
      bgColor="primary-5"
      padding="var(--global-spacing)"
      gap="16px"
    >
      <Text
        fontSize="2.5rem"
        fontWeight="bold"
        color="neutral-1"
        textAlign="center"
      >
        Latest News
      </Text>
      <Flex
        onClick={handlePrev}
        position="absolute"
        cursor="pointer"
        left={4}
        zIndex={1}
        top="50%"
        transform="translateY(-50%)"
        rounded="10px"
        backgroundColor="primary-1"
        color="white"
        padding={"10px 5px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon icon="lucide:chevron-left" width={28} height={28} />
      </Flex>
      <Flex
        onClick={handleNext}
        position="absolute"
        cursor="pointer"
        right={4}
        zIndex={1}
        top="50%"
        transform="translateY(-50%)"
        rounded="10px"
        backgroundColor="primary-1"
        color="white"
        padding={"10px 5px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon icon="lucide:chevron-right" width={28} height={28} />
      </Flex>

      <HStack
        align="stretch"
        paddingX={"50px"}
        position="relative"
        minH="400px"
        gap={10}
      >
        <Flex
          flex={1}
          justifyContent={"space-between"}
          overflow="hidden"
          flexDirection={"column"}
          minH={"100%"}
          padding={"var(--global-spacing)"}
          gap={5}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              style={{ width: "100%" }}
            >
              <VStack align="start">
                <Flex alignItems={"center"} gap={isDesktop ? 5 : 3}>
                  <Text color={"neutral-3"}>
                    {newsItems[currentIndex].dateCreated} -{" "}
                    {newsItems[currentIndex].author}
                  </Text>
                  <Flex flexWrap={"wrap"} gap={2}>
                    <Tag text={newsItems[currentIndex].tags[0]} />
                    {/* <Tag text={newsObject.tags[1]} /> */}
                  </Flex>
                </Flex>
                <Text
                  fontSize="2rem"
                  fontWeight="bold"
                  color={"text-2"}
                  textAlign="left"
                >
                  {newsItems[currentIndex].title}
                </Text>
                <Description
                  description={newsItems[currentIndex].description}
                  lineClamp="8"
                />
              </VStack>
            </motion.div>
          </AnimatePresence>
          <ButtonLink link="/news" text="See all news" />
        </Flex>
        <Flex
          flex={1}
          display="flex"
          justifyContent="flex-end"
          alignItems={"center"}
          overflow="hidden"
          rounded={"2xl"}
        >
          <AnimatePresence custom={direction} mode="wait">
            <FlexMotion
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                maxHeight: "400px",
                maxWidth: "600px",
              }}
            >
              <ImageBox
                path={newsItems[currentIndex].mainPhoto}
                alt={newsItems[currentIndex].title}
              />
            </FlexMotion>
          </AnimatePresence>
        </Flex>
      </HStack>
      <Dots
        currentIndex={currentIndex}
        itemCount={newsItems.length}
        handleDotRight={handleDotRight}
        handleDotLeft={handleDotLeft}
      />
    </Flex>
  );
}

function SmallCarousel({
  newsItems,
  currentIndex,
  setCurrentIndex,
  handleNext,
  handlePrev,
  handleDotRight,
  handleDotLeft,
}: CarouselProps) {
  const dragX = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;

    const intervalRef = setInterval(() => {
      setCurrentIndex((pv) => {
        if (pv === newsItems.length - 1) return 0;
        return pv + 1;
      });
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [isDragging, newsItems.length, setCurrentIndex]);

  function onDragStart() {
    setIsDragging(true);
  }

  function onDragEnd() {
    setIsDragging(false);
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && currentIndex < newsItems.length - 1) {
      handleNext();
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      handlePrev();
    }
  }

  return (
    <Flex
      flexDirection="column"
      overflow="hidden"
      rounded="2xl"
      bgColor="primary-5"
      border="1px solid"
      borderColor="primary-3"
      padding="var(--global-spacing)"
      gap="16px"
    >
      <Heading text={"Latest News"} color="neutral-1" />
      <Flex
        flexDirection={"column"}
        gap={5}
        overflow="hidden"
        rounded="2xl"
        position="relative"
        cursor="grab"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          style={{
            x: dragX,
            display: "flex",
            gap: "16px",
            width: `calc(${newsItems.length * 100}% + ${(newsItems.length - 1) * 16}px)`,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              style={{
                width: `calc(100%)`,
                transformOrigin: "center",
              }}
              animate={{
                translateX: `calc(-${currentIndex * 100}% - ${currentIndex * 16}px)`,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <Box>
                <NewsCard
                  newsObject={item}
                  bgColor={"primary-12"}
                  tagColor={"primary-2"}
                />
              </Box>
            </motion.div>
          ))}
        </motion.div>
        <Flex>
          <Dots
            currentIndex={currentIndex}
            itemCount={newsItems.length}
            handleDotRight={handleDotRight}
            handleDotLeft={handleDotLeft}
          />
        </Flex>
      </Flex>
      <Flex alignSelf={"center"} marginBottom={2}>
        <ButtonLink link="/news" text="See all news" />
      </Flex>
    </Flex>
  );
}

const AnimatedDot = motion.create(Box);

function Dots({
  currentIndex,
  itemCount,
  handleDotRight,
  handleDotLeft,
}: {
  currentIndex: number;
  itemCount: number;
  handleDotRight: (index: number) => void;
  handleDotLeft: (index: number) => void;
}) {
  function handleClick(index: number) {
    if (index > currentIndex) handleDotRight(index);
    else handleDotLeft(index);
  }

  return (
    <Flex w="full" justify="center" gap={1}>
      {Array.from({ length: itemCount }).map((_, idx) => (
        <AnimatedDot
          key={idx}
          onClick={() => handleClick(idx)}
          borderRadius="full"
          outline="none"
          initial={false}
          animate={{
            width: idx === currentIndex ? "28px" : "10px",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
          height="10px"
          cursor="pointer"
          bg={idx === currentIndex ? "accent-1" : "neutral-4"}
        />
      ))}
    </Flex>
  );
}

const textVariants = {
  enter: (direction: string) => ({
    y: direction === "right" ? 50 : -50,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: string) => ({
    y: direction === "right" ? -50 : 50,
    opacity: 0,
  }),
};

const imageVariants = {
  enter: (direction: string) => ({
    x: direction === "right" ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: string) => ({
    x: direction === "right" ? -300 : 300,
    opacity: 0,
  }),
};
