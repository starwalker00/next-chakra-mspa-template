import type { NextPageWithLayout } from '@custom-types/page'
import type { ReactElement } from 'react'

import { Center, Heading } from '@chakra-ui/react'

const Home: NextPageWithLayout = () => {
    return (
        <>
            <Center>
                <Heading>Home</Heading>
            </Center>
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
}

export default Home
