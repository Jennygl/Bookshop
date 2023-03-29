// Detta behövs inte efter version 17
import React from 'react'
import bokhandel from './../roslagensbokhandel.jpeg'

function HeroComp() {
    return (
        <>
        {/* div.classname enter */}
            <img src={bokhandel} className="Hero-image" style={{ resizeMode: 'cover', }} alt="Roslagens bokhandel" />
        </>
    )
}

{/* <style>
.Hero-image{

}
</style> */}
export default HeroComp
