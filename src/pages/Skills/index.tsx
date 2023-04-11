import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { mySkills } from '../../data/mySkills';
import { ISkills } from '../../types/ISkills';
import { Image, MyContainer } from './styles';
import { useState } from 'react';

const Skills = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [skillDescription, setSkillDescription] = useState('');

  const handleMouseEnter = (description: string) => {
    setShowDescription(true);
    setSkillDescription(description);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <MyContainer id="skills">
      <Typography
        variant="h1"
        textAlign="center"
        marginBottom={10}
        sx={{ fontSize: { sm: '50px', md: '70px', lg: '90px', xl: '96px' } }}
      >
        Habilidades
      </Typography>
      <Box display="flex" gap={5}>
        <Box>
          <ImageList cols={4} gap={10} sx={{ overflowY: 'hidden' }}>
            {mySkills.map((skill: ISkills, index) => (
              <ImageListItem key={skill.iconUrl}>
                <Box>
                  <Image
                    src={skill.iconUrl}
                    onMouseEnter={() => handleMouseEnter(skill.description)}
                    onMouseLeave={handleMouseLeave}
                  />
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        {showDescription ? (
          <Typography
            variant="h4"
            textAlign="justify"
            sx={{
              fontSize: { sm: '16px', md: '26px', lg: '30px', xl: '34px' },
            }}
          >
            {skillDescription}
          </Typography>
        ) : (
          <Typography
            variant="h4"
            textAlign="justify"
            sx={{
              fontSize: { sm: '20px', md: '26px', lg: '30px', xl: '34px' },
            }}
          >
            * Passe o mouse em cima de alguma habilidade para ler a descrição *
          </Typography>
        )}
      </Box>
    </MyContainer>
  );
};

export default Skills;
