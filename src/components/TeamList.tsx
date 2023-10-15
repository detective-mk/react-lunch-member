import { Stack, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

type TeamListProps = {
  team: string[];
  index: number;
};

function TeamList({ team, index }: TeamListProps) {
  return (
    <Stack spacing={6}>
      <Heading as="h2" size="lg">
        チーム{index + 1}
      </Heading>
      <UnorderedList>
        {team.map((member, index) => (
          <ListItem key={index}>{member}</ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
}

export default TeamList;
