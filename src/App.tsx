import "./App.css";
import { useState } from "react";
import { Box, Button, SimpleGrid, Heading, VStack } from "@chakra-ui/react";
import { designer, developer, director } from "./data/member";
import RoleList from "./components/RoleList";
import TeamList from "./components/TeamList";

function App() {
  /** チーム数 */
  const numberOfTeams = 4;
  const roleList = ["ディレクター", "デザイナー", "開発者"];
  const allMember = [[...director], [...designer], [...developer]];
  const [teams, setTeams] = useState<string[][]>([]);

  /** 各グループから最低1人ずつ抽出して4チームを作成 */
  const makeTeam = () => {
    const tmpTeam: string[][] = [];

    for (let i = 0; i < numberOfTeams; i++) {
      const directorMember =
        allMember[0][Math.floor(Math.random() * allMember[0].length)];
      const designerMember =
        allMember[1][Math.floor(Math.random() * allMember[1].length)];
      const developerMember =
        allMember[2][Math.floor(Math.random() * allMember[2].length)];

      allMember[0].splice(allMember[0].indexOf(directorMember), 1);
      allMember[1].splice(allMember[1].indexOf(designerMember), 1);
      allMember[2].splice(allMember[2].indexOf(developerMember), 1);

      tmpTeam.push([directorMember, designerMember, developerMember]);
    }

    const remainderMember = allMember.flat();
    remainderMember.forEach((remainder, index) => {
      tmpTeam[index].push(remainder);
    });

    setTeams(tmpTeam);
  };

  return (
    <Box boxShadow="lg" rounded="md" p="20" bg="white">
      <VStack spacing={16}>
        <VStack spacing={24}>
          <Heading as="h1" size="xl">
            ランチメンバー決めツール
          </Heading>

          <SimpleGrid columns={3} spacing={20}>
            {roleList.map((role, index) => {
              return (
                <RoleList
                  role={role}
                  roleGroup={allMember[index]}
                  key={index}
                ></RoleList>
              );
            })}
          </SimpleGrid>
        </VStack>

        <Button colorScheme="teal" onClick={makeTeam}>
          {teams.length ? "シャッフル" : "メンバー決め"}
        </Button>

        {teams.length && (
          <SimpleGrid columns={2} spacingX="100px" spacingY="60px">
            {teams.map((team, index) => {
              return (
                <TeamList team={team} index={index} key={index}></TeamList>
              );
            })}
          </SimpleGrid>
        )}
      </VStack>
    </Box>
  );
}

export default App;
