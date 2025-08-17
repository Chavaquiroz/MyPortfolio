/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfilePic  from './assets/yopng.png'
import ProfileCard from './ProfileCard.tsx' 
import './css/App.css'
import './css/timeline.css'
import { Box, HStack, VStack, Image, Card, Text,Grid,GridItem} from '@chakra-ui/react'
import { useState } from "react";

import TextType from './TextType.tsx'
import SpotlightCard from './SpotlightCard';
import CountUp from './CountUp.tsx' ;
import GradientText from './GradientText.tsx'
import ScrollFloat from './ScrollFloat.tsx'
import PillNav from './PillNav.tsx'
import RotatingText from './RotatingText.tsx'
import DecryptedText from './DecriptedText.tsx'
import GlareHover from './GlareHover.tsx'
import Competences from './Competences.tsx'
import Stepper, {Step} from './Stepper.tsx'

import { SiAmazonwebservices, SiAndroid, SiAseprite, SiBlender, SiDocker, SiTypescript,
  SiPython,SiPostman, SiGithub,SiNpm, SiPostgresql, SiLinux, SiReact, SiVite, SiGodotengine, SiCplusplus,
  SiFirebase,SiFortran,SiArduino, SiRuby, SiJupyter, SiUnity, SiOverleaf, SiGradle
 } from "react-icons/si";

import { FaJava} from "react-icons/fa";
import { FaFlutter, FaHtml5, FaCss3Alt, FaApple } from "react-icons/fa6";
import { IoLogoIonic } from "react-icons/io";
import Aurora from './Aurora';
import { Chrono } from "react-chrono";
import { useMemo } from "react";
/* ...tus imports de Chakra y GlareHover... */


const icons = [
  SiAmazonwebservices,
  SiAndroid,
  SiAseprite,
  SiBlender,
  SiDocker,
  SiTypescript,
  SiPython,
  SiPostman,
  SiGithub,
  SiNpm,
  SiPostgresql,
  SiLinux,
  SiReact,
  SiVite,
  SiGodotengine, SiCplusplus,
  SiFirebase,SiFortran,SiArduino,
  FaJava,
  FaFlutter,
  FaHtml5,
  SiRuby, 
  SiJupyter,
  FaCss3Alt, 
  FaApple, 
  SiUnity, 
  SiOverleaf,
  IoLogoIonic,
  SiGradle

]

const items = [
    { title: "Aug 2024 - Present" },
    { title: "Dec 2024 - May 2025" },
    { title: "Dec 2024 - Jun 2025" },
    { title: "May 2025 - Present" },
  ];

function App() {
  const [name, setName] = useState("");
  const timings = useMemo(
  () =>
    icons.map(() => ({
      delay: `${(Math.random() * 10).toFixed(2)}s`,      // hasta 10s
      duration: `${(6 + Math.random() * 6).toFixed(2)}s` // 6–12s
    })),
  []
);
  return (
    
    <>
      <Aurora
        colorStops = {["#59317b", "#38308a", "#345670"]}
        amplitude = {1.0}
        blend = {0.5}
        speed={1.0}
      />

      <VStack width={'100%'} >
      <PillNav
        items={[
          { label: "About", targetId: "about" },
          { label: "Education", targetId: "education" },
          { label: "Experience", targetId: "experience" },
          { label: "Skills", targetId: "skills" },
          { label: "Contact", targetId: "contact" },
        ]}
        baseColor = "#1E1B2E"         // Azul-violeta muy oscuro para el fondo/base
        pillColor = "#3a485eff"         // Azul intermedio que combina con los botones
        hoveredPillTextColor = "#F4F4F9" // Blanco ligeramente cálido para hover legible
        pillTextColor = "#E0E6F8"
      />
      <Box height={'10vh'}/>
      <Box style={{ width: '100%', position: 'relative' }}>
        
        <HStack justify={'center'}>
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
            onContactClick={() => {
              const section = document.getElementById("contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <VStack justify='center'>
            <Box
              height="30vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative" 
              overflow="hidden"   
            >

              <Box position="relative" zIndex={1}>
                <TextType
                  style={{ fontSize: "35px" }}
                  className="pixelify-sans"
                  text={["Welcome to my Portfolio :)\nI'm Chava"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </Box>
          </Box>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(46, 111, 184, 0.55)">
            <Box width={'30vw'}>
              <GradientText 
                colors={[
                  "#566ef5ff", // azul claro brillante
                  "#de84edff", // plata clásico
                  "#5493e6ff", // azul muy pálido brillante
                  "#cea8fdff", // gris plata oscuro
                  "#b0ffeeff"  // azul metálico suave
                ]}
                animationSpeed={5}
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
                  "#566ef5ff", // azul claro brillante
                  "#de84edff", // plata clásico
                  "#5493e6ff", // azul muy pálido brillante
                  "#cea8fdff", // gris plata oscuro
                  "#b0ffeeff"  // azul metálico suave
                ]}
                animationSpeed={12}
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
        <Box height={'10vh'} id='about'/>


        
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
              fontSize: "1.3rem",      
              lineHeight: "1.9rem",
              color: "#c6d5fcff",          
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
          ml={{ md: 8 }}               
          mt={{ base: 4, md: 0 }}
          minW={{ md: "340px" }}        
        >
          <Text as="span" color="#c6d5fcff">
            Coding in
          </Text>

          <Box
            bg="#29457e"
            borderRadius="md"
            px="3"
            py="1"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
          >
            <RotatingText
              texts={["Java", "TypeScript", "Python", "C++", "FORTRAN", "SQL", "AWS",
                "Postman", "C#", "Docker", "Maven", "Ionic", "CSS", "Flutter"
              ]}
              splitBy="words"
              rotationInterval={2000}
              className="text-rotate"
              elementLevelClassName="text-rotate-element"
              splitLevelClassName="text-rotate-word"
              viewportHeight={40}
              
              
            />
          </Box>
          
          </Box>
        </VStack>
      </Box>

        <Box height={'10vh'} id='education'/>
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
        <Box height={'10vh'} id='experience'/>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Experience
        </ScrollFloat>
        <Chrono
          disableToolbar
          items={items}
          highlightCardsOnHover={true}
          mode="VERTICAL_ALTERNATING"
          theme={{ primary: "#3f2d86ff", secondary: "rgb(201, 218, 248)", 
            cardBgColor: "#3f2d86ff", titleColor:"rgb(201, 218, 248)",titleColorActive:"rgb(49, 38, 95)",
           }}
          classNames={{ card: "tl-card" }} 
          fontSizes={{
            title: '1.5rem'
          }}
          
        >
          {/* 1 */}
          <div className="card-footer">
            <div className="logo-box">
              <img src="/algorithmics.png" alt="Algorithmics" />
            </div>
            <h4>Programming Professor</h4>
            <p>
              Conducted classes in <strong>Python</strong>, <strong>Lua</strong>, 
              <strong>Roblox Studio</strong>, <strong>Visual Programming</strong>, 
              videogames design and programming logic, designed for children aged 5 to 14.
            </p>
          </div>

          {/* 2 */}
          <div className="card-footer" >
            <div className="logo-box">
              <img src="/outlierlogo.png" alt="Outlier" />
            </div>
            <h4>Artificial Intelligence Consultant</h4>
            <p>
             Performed analysis, debugging, and testing of various 
             Python projects developed using Artificial Intelligence techniques
            </p>
          </div>

          {/* 3 */}
          <div className="card-footer">
            <div className="logo-box">
              <img src="/ciologo.png" alt="CIO" />
            </div>
            <h4>Research Assistant</h4>
            <p>
              Coding of neural networks for the analysis and classification of a specific image 
              dataset in the project "Characterization of Laguerre-Gauss beams in turbulent media
               using artificial intelligence"
            </p>
          </div>

          {/* 4 */}
          <div className="card-footer">
            <div className="logo-box">
              <img src="/optimenlogo.avif" alt="Optimen" />
            </div>
            <h4>Software Developer </h4>
            <p>
              Optimization of pilot and flight scheduling for LATAM Airlines through tools such
               as OptaPlanner and Jeppesen
            </p>
          </div>
        </Chrono>
        <Box height={'3vh'}/>
        <Box height={'10vh'}/>

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
        sdsd
        <Box height={'10vh'}/>
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
        <Competences/>
        <Box height={'10vh'} id='skills'/>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Skills
        </ScrollFloat>
        <Box maxW="900px" mx="auto" p={4} border={'none'}>
        <Grid
  templateColumns={{
    base: "repeat(3, 1fr)",
    sm: "repeat(5, 1fr)",
    md: "repeat(8, 1fr)",
    lg: "repeat(12, 1fr)",
    xl: "repeat(15, 1fr)",
  }}
  gap={2}
>
  {icons.map((IconCmp, i) => {
    const { delay, duration } = timings[i];
    return (
      <GridItem key={i}>
        <GlareHover
          glareColor="#b5c2ffff"
          width="100%"
          height="50px"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={200}
          transitionDuration={300}
          playOnce={false}
          style={{
            borderRadius: 10,
            overflow: "hidden",
            background: "transparent",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <Box
            className="skill-card"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
            height="50px"
            // CSS variables para la animación
            style={{
              ["--delay" as any]: delay,
              ["--duration" as any]: duration,
            }}
          >
            <IconCmp size={28} color="#4e5597ff" focusable={false} />
          </Box>
        </GlareHover>
      </GridItem>
    );
  })}
</Grid>

          </Box>
          <Box height={'10vh'}/>
          <ScrollFloat
        
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=30%'
          stagger={0.06}
        >
          Contact Me
        </ScrollFloat>
        <Box height={'2vh'} id='contact'/>
        <Stepper 
          style={{ width: "600px" }}
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2>Welcome to the React Bits stepper!</h2>
            <p>Check out the next step!</p>
          </Step>
          <Step>
            <h2>Step 2</h2>
            <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
            <p>Custom step content!</p>
          </Step>
          <Step>
            <h2>How about an input?</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
          </Step>
          <Step>
            <h2>Final Step</h2>
            <p>You made it!</p>
          </Step>
        </Stepper>
        <Box height={'10vh'} id='contact'/>
        <Text color={"white"}>@chavasado</Text>
      </VStack>
    </>
  )
}

export default App
