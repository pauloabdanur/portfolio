import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { mySkills } from '../../../data/mySkills';
import { ISkills } from '../../../types/ISkills';
import { Image, MyContainer } from './styles';
import { useState } from 'react';

const SkillsMobile = () => {
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
      <Typography variant="h1" textAlign="center" fontSize="55px">
        Habilidades
      </Typography>
      <Box display="flex" gap={5} flexDirection="column" marginTop="25px">
        {showDescription ? (
          <Typography variant="h4" textAlign="justify" fontSize="18x">
            {skillDescription}
          </Typography>
        ) : (
          <Typography variant="h4" textAlign="justify" fontSize="20px">
            * Clique em cima de alguma habilidade para ler a descrição *
          </Typography>
        )}
        <Box>
          <ImageList cols={3} gap={10} sx={{ overflowY: 'hidden' }}>
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
      </Box>
    </MyContainer>
  );
};

export default SkillsMobile;
