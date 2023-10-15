import { Stack, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

type RoleListProps = {
  role: string;
  roleGroup: string[];
};

function RoleList({ role, roleGroup }: RoleListProps) {
  return (
    <Stack spacing={6}>
      <Heading as="h2" size="lg">
        {role}
      </Heading>
      <UnorderedList>
        {roleGroup.map((member, index) => (
          <ListItem key={index}>{member}</ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
}

export default RoleList;
