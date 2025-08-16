import ProfilePic  from './assets/yopng.png'
import ProfileCard from './ProfileCard.tsx'
//import DarkVeil from './Background.tsx';
import './css/App.css'
import { Box, HStack, VStack, Image, Card, Text} from '@chakra-ui/react'
//import MagicBento from './MagicBento'
import TextType from './TextType.tsx'
//Agregar countup, spotlight card y ver como poner dentro de esa card count up y texttype
import SpotlightCard from './SpotlightCard';
import CountUp from './CountUp.tsx' ;
//import Squares from './Squares.tsx';
import GradientText from './GradientText.tsx'
import ScrollFloat from './ScrollFloat.tsx'
import PillNav from './PillNav.tsx'
import logoImg from './assets/react.svg'
import RotatingText from './RotatingText.tsx'
import DecryptedText from './DecriptedText.tsx'
import GlareHover from './GlareHover.tsx'

/*import PromoCard from './PromoCard.tsx'
import neiulogo from "./assets/neiulogo.jpeg"
import neiu from "./assets/neiu.jpeg"
*/

function App() {
  
  return (
    
    <>
      <VStack width={'100%'} align={'center'}>
      <PillNav
        logo={logoImg}
        logoAlt="Mi Logo"
        items={[
          { label: "Home" },
          { label: "About" },
          { label: "Services" },
          { label: "Contact" }
        ]}
        baseColor = "#1E1B2E"         // Azul-violeta muy oscuro para el fondo/base
        pillColor = "#3a485eff"         // Azul intermedio que combina con los botones
        hoveredPillTextColor = "#F4F4F9" // Blanco ligeramente cálido para hover legible
        pillTextColor = "#E0E6F8"
      />
      <Box height={'8vh'}/>
      <Box style={{ width: '100%', position: 'relative' }}>
        
        <HStack>
          <ProfileCard
            name="Salvador Quiroz"
            iconUrl={ProfilePic}
            title="Software Developer"
            handle="chavasado"
            status='Available'
            contactText="Contact Me"
            avatarUrl={ProfilePic}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
          <VStack justify='center'>
            <Box height="30vh" display="flex" alignItems="center" justifyContent="center">
              
              <TextType 
                style={{ fontSize: "35px" }}
                className="pixelify-sans"
                text={["Welcome to my Portfolio :)"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </Box>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(46, 111, 184, 0.55)">
            <Box width={'30vw'}>
              <GradientText 
                colors={[
                  "#6ec1ff", // azul claro brillante
                  "#c0c0c0", // plata clásico
                  "#5493e6ff", // azul muy pálido brillante
                  "#a9a9a9", // gris plata oscuro
                  "#b0e0ff"  // azul metálico suave
                ]}
                animationSpeed={3}
                showBorder={false}
                
                className="custom-class"
              > +
                  <CountUp
                    from={0}
                    to={8}
                    
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  &#160; Years of experience
              </GradientText>
            </Box>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(46, 111, 184, 0.55)">
            <Box width={'30vw'}>
              <GradientText 
                colors={[
                  "#6ec1ff", // azul claro brillante
                  "#c0c0c0", // plata clásico
                  "#5493e6ff", // azul muy pálido brillante
                  "#a9a9a9", // gris plata oscuro
                  "#b0e0ff"  // azul metálico suave
                ]}
                animationSpeed={3}
                showBorder={false}
                
                className="custom-class"
              > +
                  <CountUp
                    from={0}
                    to={30}
                    
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  &#160; Coding Projects
              </GradientText>
            </Box>
          </SpotlightCard>
          </VStack>
          
        </HStack>
        <Box height={'10vh'}/>


        
        <ScrollFloat
        
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          About Me
        </ScrollFloat>
        <Box height={'3vh'}/>

        {/* --- About section (debajo de "About Me") --- */}
    <Box maxW="900px" mx="auto" px={{ base: 4, md: 6 }}>
      <VStack
        spaceX={{ base: 6, md: 12 }}
        align="center"
        justify="space-between"
        flexWrap="wrap"
      >
        {/* About Text */}
        <Box
          flex={{ base: "1 1 100%", md: "1 1 60%" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DecryptedText
            text="I am a physicist engineer passionate about science and programming.
    I have professional experience in software development with a focus on optimization, machine learning, quantum computing, aerospace engineering, web development and videogames."
            animateOn="view"
            speed={10}
            maxIterations={100}
            revealDirection="start"
            style={{
              fontSize: "1.3rem",       // más grande
              lineHeight: "1.9rem",
              color: "black",            // negro
              fontWeight: "500",
              fontFamily: "'JetBrains Mono', monospace"
            }}
          />
        </Box>
        <Box height={'2vh'}/>
        {/* Coding In */}
        <Box
          flex={{ base: "1 1 100%", md: "1 1 40%" }}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          gap="2"
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          ml={{ md: 8 }}                // empuja "Coding in" a la derecha en desktop
          mt={{ base: 4, md: 0 }}
          minW={{ md: "340px" }}        // asegura un poco más de separación
        >
          <Text as="span" color="black">
            Coding in
          </Text>

          <Box
            bg="#5A32FF"
            borderRadius="md"
            px="3"
            py="1"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
          >
            <RotatingText
              texts={["Java", "TypeScript", "Python", "C++", "FORTRAN", "SQL", "AWS"]}
              splitBy="words"
              rotationInterval={2000}
              className="text-rotate"
              elementLevelClassName="text-rotate-element"
              splitLevelClassName="text-rotate-word"
            />
          </Box>
          
          </Box>
        </VStack>
      </Box>

        <Box height={'10vh'}/>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Education
        </ScrollFloat>
        <Box height={'3vh'}/>
        <HStack width={'100%'} justify={'center'}>
        {/* PRIMERA CARD */}
          <Card.Root maxW="sm" overflow="hidden" position="relative">
              {/* Borde animado */}
              <Box className="gradient-border gradient-animated">
                <Image
                  src="/neiu.jpg"
                  alt="Green double couch with wooden legs"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  display="block"
                />
              </Box>

              { /* Logo pequeño */}
              <Box position="absolute" bottom="8" right="5">
                <Image
                  src="/neiulogo.jpeg"
                  alt="Logo pequeño"
                  boxSize="60px"
                />
              </Box>

              {/* Body con gradiente */}
              <Card.Body gap="0" className="gradient-body gradient-animated">
                <Card.Title>Northeastern Illinois University</Card.Title>
                <Card.Description>
                  B.S. in Physics<br /> 
                  Exchange student during Spring 2024<br /> 
                </Card.Description>
              </Card.Body>
            </Card.Root>

            <Card.Root maxW="sm" overflow="hidden" position="relative">
              {/* Borde animado como en la primera */}
              <Box className="gradient-border gradient-animated">
                <Image
                  src="/ug.jpg"
                  alt="Green2 double couch with wooden legs"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  display="block"
                />
              </Box>

              <Box position="absolute" bottom="4" right="2">
                <Image
                  src="/uglogo.png"
                  boxSize="90px"
                  objectFit="contain"
                />
              </Box>

              {/* Body con el mismo gradiente */}
              <Card.Body gap="0" className="gradient-body gradient-animated">
                <Card.Title>Universidad de Guanajuato</Card.Title>
                <Card.Description>
                  Engineering Physics<br /> 
                  GPA 9.4/10<br /> 
                </Card.Description>
              </Card.Body>
            </Card.Root>
        </HStack>           
        </Box>
        <Box height={'10vh'}/>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Experience
        </ScrollFloat>
        <Box height={'3vh'}/>
        <Text>Aqui va la timeline o no se que pongo jajaj</Text>
        <Box height={'3vh'}/>

        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Projects 
        </ScrollFloat>
        <Box height={'3vh'}/>
        <Text>Aqui van mis proyectos importantes uwu</Text>
        <Box height={'3vh'}/>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Competences
        </ScrollFloat>
        <Box height={'3vh'}/>
        <Text>Aqui van los hackatones y olimpiadas</Text>
        <Box height={'3vh'}/>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Skills
        </ScrollFloat>
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          >
          </GlareHover>
      </VStack>
    </>
  )
}

export default App
