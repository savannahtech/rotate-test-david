"use client";

import { Avatar, Box, Flex, Img, LinkBox, Text } from "@chakra-ui/react";
import { useAuth } from "../context";

const Topbar = () => {
  const { user } = useAuth();
  const { email, name, picture } = user || {};

  return (
    <Flex
      p="0 27px"
      height="76px"
      justify="space-between"
      align="center"
      bgColor="white.100"
    >
      <LinkBox>
        <Img src="/images/rotate-logo.png" alt="Rotate Logo" w="150px" />
      </LinkBox>
      <Flex align="center">
        <Box mr="8px">
          <Text
            fontSize="16px"
            fontWeight="500"
            lineHeight="19.36px"
            fontFamily="var(--font-inter-sans), sans-serif"
          >
            {name}
          </Text>
          <Text
            fontSize="14px"
            fontWeight="400"
            lineHeight="16.94px"
            fontFamily="var(--font-inter-sans), sans-serif"
          >
            {email}
          </Text>
        </Box>

        <Avatar src={picture} w="40px" h="40px" />
      </Flex>
    </Flex>
  );
};

export default Topbar;
