"use client";

import React, { useState } from "react";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/ui/internal/card";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import ButtonLink from "@/components/ui/internal/button-link";
import membershipFaqs from "@/data/membership-faqs";
import ieeeGlobalMembershipFaqs from "@/data/ieee-global-membership-faqs";

const MotionBox = motion.create(Box);
const MotionDiv = motion.div;

// ─── data ────────────────────────────────────────────────────────────────────

const zsbPerks = [
  { icon: "lucide:graduation-cap", title: "Technical Workshops", description: "Hands-on sessions covering engineering, programming, robotics, and more." },
  { icon: "lucide:users",          title: "Community & Network", description: "Connect with students, professionals, and IEEE members worldwide." },
  { icon: "lucide:trophy",         title: "Leadership Roles",   description: "Grow as a leader through our committees, chapters, and board positions." },
  { icon: "lucide:globe",          title: "Global IEEE Access", description: "Tap into IEEE's global resources: conferences, publications, and standards." },
];

const ieeeStats = [
  { icon: "lucide:users",     value: "500,000+", label: "Members Worldwide" },
  { icon: "lucide:globe",     value: "190+",     label: "Countries & Territories" },
  { icon: "lucide:calendar",  value: "2,000+",   label: "Conferences per Year" },
  { icon: "lucide:book-open", value: "~1/3",     label: "of World's Technical Literature" },
];

const ieeeBenefits = [
  { icon: "lucide:database",      text: "IEEE Xplore - access to millions of technical papers, journals, and standards" },
  { icon: "lucide:bar-chart-2",   text: "39+ Technical Societies covering every engineering and technology discipline" },
  { icon: "lucide:award",         text: "Global recognition through IEEE Fellow grade and prestigious awards" },
  { icon: "lucide:message-square",text: "IEEE Collabratec - a professional networking platform for engineers" },
  { icon: "lucide:video",         text: "IEEE.tv - on-demand video content from conferences and thought leaders" },
  { icon: "lucide:percent",       text: "Exclusive discounts on conferences, courses, and publications" },
];

// ─── sub-components ──────────────────────────────────────────────────────────

function FaqItem({ question, answer, isOpen, onClick }: {
  question: string; answer: string; isOpen: boolean; onClick: () => void;
}) {
  return (
    <Flex direction="column" gap={2} w="full">
      <Card padding={0}>
        <Flex
          width="full"
          justifyContent="space-between"
          align="center"
          onClick={onClick}
          cursor="pointer"
          color="neutral-1"
          padding="calc(var(--card-padding) * 0.8)"
        >
          <Text fontWeight="bold" fontSize="1.1rem" letterSpacing={1.1}>
            {question}
          </Text>
          <MotionBox animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} flexShrink={0}>
            <Icon icon="lucide:chevron-down" width="2rem" height="2rem" />
          </MotionBox>
        </Flex>
      </Card>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Card padding={0} bgColor="primary-12">
            <MotionDiv
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ overflow: "hidden", width: "100%" }}
            >
              <Text color="neutral-2" padding="var(--card-padding)">{answer}</Text>
            </MotionDiv>
          </Card>
        )}
      </AnimatePresence>
    </Flex>
  );
}

// ─── tab panels ──────────────────────────────────────────────────────────────

function ZSBPanel() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Flex direction="column" gap={10} w="full">
      <Flex direction="column" align="center" gap={4} textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "3xl" }} color="neutral-1">
          Become a Member of IEEE ZSB
        </Heading>
        <Text fontSize="lg" color="neutral-2" maxW="700px">
          Join one of Egypt's oldest and most impactful IEEE student branches.
          Develop technical skills, build lasting connections, and grow as a
          leader - all while being part of the world's largest professional
          engineering community.
        </Text>
        <ButtonLink link="https://www.facebook.com/IEEEZSB" text="Follow us for recruitment updates" icon target="_blank" />
      </Flex>

      <Grid templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }} gap={4} w="full">
        {zsbPerks.map(({ icon, title, description }) => (
          <Card key={title} bgColor="primary-3" gap={3}>
            <Stack align="center" textAlign="center" gap={2}>
              <Icon icon={icon} width="2.5rem" height="2.5rem" />
              <Text fontWeight="bold" fontSize="md" color="neutral-1">{title}</Text>
              <Text fontSize="sm" color="neutral-2">{description}</Text>
            </Stack>
          </Card>
        ))}
      </Grid>

      <Flex direction="column" gap={4} w="full">
        <Flex direction="column" align="center" gap={1} textAlign="center">
          <Heading fontSize="xl" color="neutral-1">Frequently Asked Questions</Heading>
          <Text fontSize="md" color="neutral-2">About joining IEEE Zagazig University Student Branch</Text>
        </Flex>
        {membershipFaqs.map((faq, i) => (
          <FaqItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex((p) => (p === i ? null : i))}
          />
        ))}
      </Flex>
    </Flex>
  );
}

function GlobalPanel() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Flex direction="column" gap={10} w="full">
      <Flex direction="column" align="center" gap={3} textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "3xl" }} color="neutral-1">
          Go Further with a Global IEEE Membership
        </Heading>
        <Text fontSize="lg" color="neutral-2" maxW="720px">
          A global IEEE membership connects you to the world's largest technical
          professional organization - 500,000+ engineers across 190+ countries.
          Unlock a full suite of resources that can define your career.
        </Text>
      </Flex>

      <Grid templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }} gap={4} w="full">
        {ieeeStats.map(({ icon, value, label }) => (
          <Card key={label} bgColor="primary-3" gap={2}>
            <Stack align="center" textAlign="center" gap={1}>
              <Icon icon={icon} width="2rem" height="2rem" />
              <Text fontWeight="bold" fontSize="2xl" color="neutral-1">{value}</Text>
              <Text fontSize="sm" color="neutral-2">{label}</Text>
            </Stack>
          </Card>
        ))}
      </Grid>

      <Card bgColor="primary-3">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} w="full">
          {ieeeBenefits.map(({ icon, text }) => (
            <Flex key={text} align="center" gap={3}>
              <Box flexShrink={0}>
                <Icon icon={icon} width="1.4rem" height="1.4rem" />
              </Box>
              <Text color="neutral-2" fontSize="md">{text}</Text>
            </Flex>
          ))}
        </Grid>
      </Card>

      <Flex justify="center">
        <ButtonLink link="https://www.ieee.org/membership" text="Explore Global IEEE Membership" icon target="_blank" />
      </Flex>

      <Flex direction="column" gap={4} w="full">
        <Flex direction="column" align="center" gap={1} textAlign="center">
          <Heading fontSize="xl" color="neutral-1">Frequently Asked Questions</Heading>
          <Text fontSize="md" color="neutral-2">About joining IEEE worldwide</Text>
        </Flex>
        {ieeeGlobalMembershipFaqs.map((faq, i) => (
          <FaqItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex((p) => (p === i ? null : i))}
          />
        ))}
      </Flex>
    </Flex>
  );
}

// ─── tab switcher ─────────────────────────────────────────────────────────────

const TABS = [
  { id: "zsb",    label: "IEEE ZSB",    icon: "lucide:building-2" },
  { id: "global", label: "Global IEEE", icon: "lucide:globe"      },
] as const;

type TabId = typeof TABS[number]["id"];

function TabSwitcher({ active, onChange }: { active: TabId; onChange: (t: TabId) => void }) {
  return (
    <Flex
      position="relative"
      bgColor="primary-3"
      rounded="2xl"
      p={1}
      w="fit-content"
      mx="auto"
      border="1px solid"
      borderColor="primary-3"
    >
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <Box key={tab.id} position="relative" zIndex={1}>
            {isActive && (
              <MotionDiv
                layoutId="tab-pill"
                style={{
                  position: "absolute", inset: 0,
                  borderRadius: "var(--chakra-radii-xl)",
                  backgroundColor: "var(--chakra-colors-primary-1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <Flex
              as="button"
              position="relative"
              zIndex={1}
              align="center"
              gap={2}
              px={6}
              py={3}
              rounded="xl"
              cursor="pointer"
              color={isActive ? "white" : "neutral-2"}
              fontWeight={isActive ? "bold" : "normal"}
              fontSize="md"
              transition="color 0.2s"
              onClick={() => onChange(tab.id)}
              userSelect="none"
            >
              <Icon icon={tab.icon} width="1.2rem" height="1.2rem" />
              {tab.label}
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Membership() {
  const [activeTab, setActiveTab] = useState<TabId>("zsb");

  const handleTabChange = (tab: TabId) => setActiveTab(tab);

  return (
    <Card>
      <Flex direction="column" gap={10} w="full">
        <AnimatedCard>
          <Flex direction="column" align="center" gap={6} textAlign="center">
            <Flex direction="column" gap={2}>
              <Heading fontSize={{ base: "3xl", md: "4xl" }} color="neutral-1">
                Join IEEE
              </Heading>
              <Text fontSize="lg" color="neutral-2" maxW="600px" mx="auto">
                Choose your path - start local with IEEE ZSB or explore what a
                worldwide IEEE membership has to offer.
              </Text>
            </Flex>
            <TabSwitcher active={activeTab} onChange={handleTabChange} />
          </Flex>
        </AnimatedCard>

        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {activeTab === "zsb" ? <ZSBPanel /> : <GlobalPanel />}
          </MotionDiv>
        </AnimatePresence>
      </Flex>
    </Card>
  );
}
