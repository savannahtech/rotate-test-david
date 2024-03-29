import { ReactNode } from "react";
import {
  CardBody,
  CardHeader,
  Card as ChakraCard,
  Divider,
  Heading,
} from "@chakra-ui/react";

interface CardProps {
  title: ReactNode;
  children: ReactNode;
}
const Card = ({ title, children }: CardProps) => (
  <ChakraCard
    p="17px 30px 54px"
    borderRadius="24px"
    bgColor="white.100"
    border="1px solid"
    borderColor="light-grey.200-trans"
  >
    <CardHeader>
      <Heading as="h2" variant="customH2">
        {title}
      </Heading>
    </CardHeader>
    <Divider
      m="11px 0 30px"
      borderBottom="1px solid"
      borderColor="grey.100-trans"
    />
    <CardBody>{children}</CardBody>
  </ChakraCard>
);

export default Card;
