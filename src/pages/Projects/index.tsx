import { GitHub } from '@mui/icons-material';
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { selectedProjects } from '../../data/selectedProjects';
import { otherProjects } from '../../data/otherProjects';
import { Project } from '../../types/Project';
import { Image, MyContainer, MyButton } from './styles';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] =
    useState<Project[]>(selectedProjects);
  const [seeMore, setSeeMore] = useState(true);

  const handleLoadMore = () => {
    const newArray = visibleProjects.concat(otherProjects);
    setVisibleProjects(newArray);
    setSeeMore(false);
  };

  const handleLoadLess = () => {
    setVisibleProjects(selectedProjects);
    setSeeMore(true);
  };

  return (
    <MyContainer id="projects">
      <Typography
        variant="h1"
        marginBottom="10px"
        sx={{ fontSize: { sm: '50px', md: '70px', lg: '90px', xl: '96px' } }}
      >
        Meus Projetos
      </Typography>
      <Typography
        variant="h5"
        marginBottom="30px"
        sx={{ fontSize: { sm: '16px', md: '18px', lg: '22px', xl: '24px' } }}
      >
        Clique na imagem para testar a aplicação
      </Typography>
      <ImageList cols={3} gap={20} sx={{ overflowY: 'visible' }}>
        {visibleProjects.map((project: Project) => (
          <ImageListItem
            key={project.imageUrl}
            component="a"
            href={project.demoLink}
            target="_blank"
            sx={{ cursor: 'pointer' }}
          >
            <Box display="flex" flexDirection="column">
              <Image src={project.imageUrl} />
              <ImageListItemBar
                title={project.name}
                sx={{ width: '100%' }}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    aria-label={`info about ${project.name}`}
                    href={project.githubLink}
                    target="_blank"
                  >
                    <GitHub />
                  </IconButton>
                }
              />
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      {seeMore ? (
        <MyButton onClick={handleLoadMore}>Ver Mais</MyButton>
      ) : (
        <MyButton onClick={handleLoadLess}>Ver Menos</MyButton>
      )}
    </MyContainer>
  );
};

export default Projects;
