import type { NextPageWithLayout } from 'src/custom-types/page'
import type { ReactElement } from 'react'
import { Layout, Navbar } from 'src/components/Layout'
import { Center, Heading, keyframes } from '@chakra-ui/react'
import { Container, Flex, Progress } from '@chakra-ui/react'

const About: NextPageWithLayout = () => {

    const grow = keyframes({
        "0%": { transform: "scaleX(0.1)" },
        "100%": { transform: "scaleX(1)" }
    });
    const animationGrow = `${grow} 1s infinite alternate`;

    const gradient = `linear-gradient(
        to right,
        transparent 0%,
        blue 50%,
        transparent 100%
      )`;

    return (
        <>
            <Container>
                <Heading py={8}>About</Heading>
                <Flex direction="column">
                    <Flex direction="row" outline="1px solid blue" borderRadius={12} justifyContent="center" width="400px" bg="blackAlpha.800">
                        <Progress width='200px' animation={animationGrow} size='lg' backgroundColor='red' borderRadius={12} />
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}

export default About
