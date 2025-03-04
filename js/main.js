// Example "database" of zodiac images by year. This is just a sample.
const zodiacImages = [
  { yearMod: 0, src: "img/rat.png" },
  { yearMod: 1, src: "img/ox.png" },
  { yearMod: 2, src: "img/tiger.png" },
  /* etc., up to yearMod: 11 for Pig */
];

// A function that returns the correct zodiac image path given a birth year
function getZodiacImage(year) {
  // For example, if 1924 is Rat => year % 12 = 0 => rat
  const offset = 1924; // known Rat year
  let index = (year - offset) % 12;
  if (index < 0) index += 12;
  return zodiacImages[index].src;
}

// Handle click
document.getElementById("submitBtn").addEventListener("click", function() {
  const dateVal = document.getElementById("birthdate").value;
  if (!dateVal) {
    alert("Please select a birth date.");
    return;
  }

  // Extract the year from the date input
  const birthYear = new Date(dateVal).getFullYear();

  // Get the corresponding zodiac image
  const zodiacSrc = getZodiacImage(birthYear);

  // Update the <img> inside the frame
  document.getElementById("zodiacImage").src = zodiacSrc;
});
