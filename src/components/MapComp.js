import React from 'react'

function MapComp() {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012.7975831569892!2d18.70485286113959!3d59.75785335210795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465ff64cbf9aaaab%3A0x9bc6191efebb5230!2sRoslagens%20bokhandel%20vid%20Lilla%20torget%20i%20Norrt%C3%A4lje!5e0!3m2!1ssv!2sse!4v1680522946970!5m2!1ssv!2sse"
                width={200}
                height={250}
                title="Karta"
                // allowfullscreen=""
                // loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default MapComp
