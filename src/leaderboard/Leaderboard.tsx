import { Box, Heading, VStack } from "@chakra-ui/layout";
import { LeaderboardItem } from "./LeaderboardItem";

interface Props {}

export const Leaderboard = (props: Props) => {
  return (
    <Box w="100%">
      <Heading>Leaderboard</Heading>

      <VStack spacing={4}>
        <LeaderboardItem
          donation={{
            displayName: "John Doe",
            count: 1000,
            createdAt: "2021-10-29T17:31:11.795Z",
          }}
        />
        <LeaderboardItem
          donation={{
            displayName: "John Doe",
            count: 1000,
            createdAt: "2021-10-29T17:31:11.795Z",
          }}
        />
        <LeaderboardItem
          donation={{
            displayName: "John Doe",
            count: 1000,
            createdAt: "2021-10-29T17:31:11.795Z",
          }}
        />
        <LeaderboardItem
          donation={{
            displayName: "John Doe",
            count: 1000,
            createdAt: "2021-10-29T17:31:11.795Z",
          }}
        />
      </VStack>
    </Box>
  );
};
