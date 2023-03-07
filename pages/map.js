/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Earth'), {
    ssr: false
})

export default () => <DynamicComponentWithNoSSR />