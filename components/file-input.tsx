"use client";

import { useRef } from "react";
import { Circle, Flex, Img, InputGroup, Text } from "@chakra-ui/react";

const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup
      borderRadius="8px"
      border="1px solid"
      borderColor="blue.100-trans-2"
      bgColor="light-grey.300"
      w="100%"
      h="90px"
      p="0 24px"
      display="flex"
      alignItems="center"
      cursor="pointer"
      onClick={handleClick}
    >
      <input ref={inputRef} type="file" hidden />

      <Flex align="center">
        <Img src="/svgs/upload-icon.svg" />
        <Text fontSize="10px" color="blue.100" ml="12px">
          Upload company logo
        </Text>
      </Flex>
    </InputGroup>
  );
};

export default FileUpload;
