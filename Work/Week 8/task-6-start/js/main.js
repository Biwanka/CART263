window.onload = run;

function run() {
  document.querySelector("#stepOneButton").addEventListener("click", fetchText);


  /****** PART A:: FETCH */
  async function fetchText() {
    console.log("in fetch");

    try {
      let response = await fetch("files/rainbow.txt");
      // if (!response.ok) throw new Error("Failed to fetch the file");
      let raw_rainbow_text = await response.text();
      console.log(raw_rainbow_text);

      document.getElementById("stepOneButton").style.display = "none";

      document.getElementById("inputDiv").style.display = "block";
      document.getElementById("rainbow_text").textContent = raw_rainbow_text;
      document.querySelector("#resetButton").addEventListener("click", resetPoem);
      runPartB(raw_rainbow_text);
    } catch (e) {

    }
  }

  /****** PART B:: TEXT PROCESSING  */
  function runPartB(originalRainBowText) {
    document
      .querySelector("#produce-poem")
      .addEventListener("click", producePoem);

    /* FILL IN HERE */
    function producePoem() {
      console.log(originalRainBowText)
      //SR

      let userInput = document.getElementById("phrase").value.trim();

      // Splitting rules
      let splitPattern = /[ .!?\n]+/;

      let phrase_as_array = userInput.split(splitPattern).filter(word => word.length > 0);
      let rainbow_tokens = originalRainBowText.split(splitPattern).filter(word => word.length > 0);

      console.log("User phrase split:", phrase_as_array);
      console.log("Rainbow text split:", rainbow_tokens);
      runPartC(rainbow_tokens, phrase_as_array);

    }
  }


  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_words, seed_phrase_array) {
    console.log(rainbow_words);
    console.log(seed_phrase_array);

    let poem_sentence = ""; // Initialize empty string for the final poem

    // Iterate over each word in the seed phrase array
    for (let word of seed_phrase_array) {
      console.log("Processing word:", word);

      let poem_sentence = "";

      for (let word of seed_phrase_array) {
        console.log("Processing word:", word);

        for (let i = 0; i < word.length; i++) {
          let nextChar = word[i]; // Current character

          let matchingWord = rainbow_words.find(rainbowWord =>
            rainbowWord.length > i && rainbowWord[i] === nextChar
          );

          if (matchingWord) {
            poem_sentence += matchingWord + " ";
            console.log("Matched:", matchingWord);
          } else {
            poem_sentence += "[?] "; // Placeholder for unmatched characters
            console.log("No match found for", nextChar, "at position", i);
          }
        }
      }
    }
    poem_sentence = poem_sentence.trim();
    console.log("Final poem:", poem_sentence);

    runPartD(poem_sentence);
    //to next stage

  }


  /****** PART D:: VISUALIZE  */
  function runPartD(new_sentence) {

    console.log("Displaying poem:", new_sentence);

    // Show the output div
    document.getElementById("output").style.display = "block";
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous content

    // Rainbow colors
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    // Loop through each character
    new_sentence.split("").forEach((char, index) => {
      let span = document.createElement("span");
      span.textContent = char;
      span.style.color = colors[index % colors.length]; // Cycle through colors
      span.style.fontSize = `${Math.random() * 20 + 20}px`; // Vary font size
      outputDiv.appendChild(span);
    });

  }
  /****** PART E:: RESET  */
  function resetPoem() {
    /*** TO FILL IN */
    console.log("Resetting poem...");

    // Clear the output div and hide it
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    outputDiv.style.display = "none";

    // Clear the input field
    document.getElementById("phrase").value = "";

    // Remove any dynamically added styles (in case animations were added)
    let existingStyles = document.querySelectorAll("style");
    existingStyles.forEach(style => {
      if (style.innerHTML.includes("@keyframes floatUpDown")) {
        style.remove();
      }
    });

    // Reset step one button (if needed)
    document.getElementById("stepOneButton").style.display = "block";

    console.log("Poem has been reset.");
  }
  //window onload

}