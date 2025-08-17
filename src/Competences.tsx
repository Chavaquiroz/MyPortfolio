import {
  Accordion,
  Box,
  Card,
  Image,
  HStack,
  Badge,
} from "@chakra-ui/react";

export default function Competences() {
  return (
    <Accordion.Root collapsible w="100%" maxW="xl" mx="auto">
      {/* 1 */}
      <Accordion.Item value="latte">
        <Accordion.ItemTrigger px="4" py="3" _hover={{ bg: "blackAlpha.50" }}>
          <Box flex="1" textAlign="left" fontWeight="semibold">
            The perfect latte
          </Box>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent p="0">
          <Card.Root flexDirection="row" overflow="hidden">
            <Image
              objectFit="cover"
              maxW="200px"
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">The perfect latte</Card.Title>
                <Card.Description>
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Hot</Badge>
                  <Badge>Caffeine</Badge>
                </HStack>
              </Card.Body>
              <Card.Footer>xd</Card.Footer>
            </Box>
          </Card.Root>
        </Accordion.ItemContent>
      </Accordion.Item>

      {/* 2 */}
      <Accordion.Item value="iced">
        <Accordion.ItemTrigger px="4" py="3" _hover={{ bg: "blackAlpha.50" }}>
          <Box flex="1" textAlign="left" fontWeight="semibold">
            Iced vanilla latte
          </Box>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent p="0">
          <Card.Root flexDirection="row" overflow="hidden">
            <Image
              objectFit="cover"
              maxW="200px"
              src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=60"
              alt="Iced Latte"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">Iced vanilla latte</Card.Title>
                <Card.Description>
                  Refreshing latte over ice with a hint of vanilla syrup.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Cold</Badge>
                  <Badge>Vanilla</Badge>
                </HStack>
              </Card.Body>
              <Card.Footer>xd</Card.Footer>
            </Box>
          </Card.Root>
        </Accordion.ItemContent>
      </Accordion.Item>

      {/* 3 */}
      <Accordion.Item value="matcha">
        <Accordion.ItemTrigger px="4" py="3" _hover={{ bg: "blackAlpha.50" }}>
          <Box flex="1" textAlign="left" fontWeight="semibold">
            Matcha latte
          </Box>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent p="0">
          <Card.Root flexDirection="row" overflow="hidden">
            <Image
              objectFit="cover"
              maxW="200px"
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=60"
              alt="Matcha Latte"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">Matcha latte</Card.Title>
                <Card.Description>
                  Ceremonial-grade matcha whisked with milk for a creamy profile.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Tea</Badge>
                  <Badge>Antioxidants</Badge>
                </HStack>
              </Card.Body>
              <Card.Footer>xd</Card.Footer>
            </Box>
          </Card.Root>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
