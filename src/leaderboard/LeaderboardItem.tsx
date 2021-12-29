import { Badge, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Donation } from "../types";
import formatDate from "../utils/formatDate";

interface DonationProps {
  donation: Donation;
}

export const LeaderboardItem = ({ donation }: DonationProps) => {
  return (
    <Flex
      boxShadow="md"
      p={3}
      bg="white"
      borderRadius="lg"
      maxWidth="xl"
      w="100%"
    >
      <Avatar size="lg" />

      <Flex flex="1" justifyContent="space-between" h="100%">
        <Flex flexDirection="column" textAlign="left">
          <Text
            fontWeight="bold"
            color="blue.500"
            fontSize="sm"
            textTransform="uppercase"
          >
            {donation.team}
          </Text>
          <Text fontWeight="bold">{donation.displayName}</Text>
          <Text fontSize="sm">{donation.message}</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="space-around"
          textAlign="right"
        >
          <Badge
            colorScheme="green"
            borderRadius="full"
            textTransform="lowercase"
            py={1}
            px={8}
            as="div"
          >
            {donation.count.toLocaleString()} pounds
          </Badge>
          <Text fontSize="xs">{formatDate(donation.createdAt)}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
