import React from 'react'
import styled from 'styled-components'
import bokhylla from '../assets/bookcase.jpeg'

function MaskedText() {
    return (
        <Masked className="maskedText">
            <Text className="text">Roslagens bokhandel</Text>
            <Subtext className="subText">vid Lilla torget i Norrtälje</Subtext>
        </Masked>
    )
}

export default MaskedText

const Text = styled.p`
    font-weight: bolder;
    line-height: 15vh;
    background-image:  url(${bokhylla});
    font-size: 8em;
    text-align: center;
    margin: 0;
    border: 4px solid;
    background-size: contain;
    width: 80vw;
    height: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`
const Subtext = styled.p`
    font-size: 2em;
`
const Masked = styled.div`
    /* margin-top: 15vh; */
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 35vh;
    width: 100vw;
    z-index: 10;
`
// https://lh3.googleusercontent.com/SFGbghHm6R8j9eIGgCt6MEP-7JPTI0GaJVfRBSBkZ3N6zfRevEyjiBdg3QwXPFR0SbhIvCRt4xA2oLLXobrpBarQKX7fCZPznOeAbD6TVAw6Ddj0u2uLPcCAaWVBul-9wd-hXJuNFWZlSPw4y7Gn5KKTccv2-1pQ34u1bkPJaS55Um82CH5QY3HtEBvjeHOz75FQqBclZUUgXV-zMgdo_nhofffun4sDtQjK-zIm59INtITVXjJDYDMH_6OU_Ddiysaqw6ClyPHqwGF5TNB-GQlNoNfTGDjT-Q5Dxu5hsrCwh2NwMFMsrsSpnMXeEf34-47SgWD7mK3PD3mUEXe1gaQExP1zdbS3-IsN6KS-zpW6CKn31G5pU9msiu7p2FeJxhrwSZAyjbBb2WOlMzCTzUyRdZyDp-kb_qa0sQ7zdjs73x63dPLGI29rdJkmalw-8jNTJUGO0v0vbnv_L_Qhkh5U2DL1vv790aBWjoS15rAWrW9D2LDc-XlyfDfz3xyqCuTRuXkx-EyDnSdABcjD0Tc9e6kj-c9E5wSeYlCVv6gAdn2PKdsWE75pn31CoQx3dnEb_1LXnf2ZN5n-_OQPoGo40qtmjTEPgC3Nf-ImenVihkspv_0NmA-X-PlstarYQbZuaD7reVjV2uXU3v8PD3RwTjhInItjbNzq5f04fUmP80oD3UikXsOBtQlzoJKsGOWPs0co8OVgmPg15IioTdArtl0JL2WLt_VZHqrs5kUrxYaZVRLnhTnjb1NXcOyDAk-bRhthoZ5wHGiMCiKOSWVfqY_zDuGMT0yJ_DkZT8ZtCqzwZ-LWpEPykqaVDYb33Mb9G74CQCbNvcMOcNAefUYUHCRms5tjd-4Wo_XvEEYDfIQsu6Ww_YlMhWTPIJ_8xwPw2RvoaifnVIXGKn6i1lK84ZopX6jNGRqpxy4WM97RJQ=w1190-h893-s-no?authuser=0
