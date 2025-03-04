window.onload = function () {
    console.log(" hello strings")

    let text = `A rainbow is an optical and meteorological phenomenon that is caused by 
   both reflection and refraction of light in water droplets resulting in a spectrum of 
   light appearing in the sky! Does it takes the form of a multicoloured arc? 
   Rainbows caused by sunlight always appear in the section of sky directly 
   opposite the sun.In a double rainbow, a second arc is seen outside the primary arc.`

    let newDelimiter = /[.?!|]/
    let splitSentences = text.split(newDelimiter);
    container_3.innerHTML += `<p>  Delimiter : MULTIPLE </p>`;
    for (let i = 0; i < splitSentences.length; i++) {
        container_3.innerHTML += `<p> Element <span style = "color:crimson"> ${i}</span>: 
   ${splitSentences[i]}</p>`;
    }
};
