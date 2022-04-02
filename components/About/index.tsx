import type { NextPageWithLayout } from '@custom-types/page'
import type { ReactElement } from 'react'

import { Center, Heading } from '@chakra-ui/react'

const About: NextPageWithLayout = () => {
    return (
        <>
            <Center>
                <Heading>About</Heading>
            </Center>
        </>
    )
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
}

export default About
