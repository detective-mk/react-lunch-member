import "./App.css";
import { useState } from "react";
import {
  Button,
  SimpleGrid,
  Heading,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { designer, developer, director } from "./data/member";

function App() {
  /** チーム数 */
  const numberOfTeams = 4;
  const directorGroup = [...director];
  const designerGroup = [...designer];
  const developerGroup = [...developer];
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
    <>
      <VStack spacing={16}>
        <Heading as="h1" size="xl">
          ランチメンバー決めツール
        </Heading>

        <SimpleGrid columns={3} spacing={20}>
          <div className="director">
            <VStack spacing={4} alignItems={"flex-start"}>
              <Heading as="h2" size="lg">
                ディレクター
              </Heading>
              <UnorderedList>
                {directorGroup.map((member, index) => (
                  <ListItem key={index}>{member}</ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </div>
          <div className="designer">
            <VStack spacing={4} alignItems={"flex-start"}>
              <Heading as="h2" size="lg">
                デザイナー
              </Heading>
              <UnorderedList>
                {designerGroup.map((member, index) => (
                  <ListItem key={index}>{member}</ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </div>
          <div className="developer">
            <VStack spacing={4} alignItems={"flex-start"}>
              <Heading as="h2" size="lg">
                開発者
              </Heading>
              <UnorderedList>
                {developerGroup.map((member, index) => (
                  <ListItem key={index}>{member}</ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </div>
        </SimpleGrid>

        <Button colorScheme="blue" onClick={makeTeam}>
          メンバー決め
        </Button>

        {teams.length && (
          <SimpleGrid columns={2} spacing={20}>
            {teams.map((team, index) => {
              return (
                <div key={index}>
                  <VStack spacing={4} alignItems={"flex-start"}>
                    <Heading as="h2" size="lg">
                      チーム{index + 1}
                    </Heading>
                    <UnorderedList>
                      {team.map((member, index) => (
                        <ListItem key={index}>{member}</ListItem>
                      ))}
                    </UnorderedList>
                  </VStack>
                </div>
              );
            })}
          </SimpleGrid>
        )}
      </VStack>
    </>
  );
}

export default App;
