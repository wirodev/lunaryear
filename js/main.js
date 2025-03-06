const zodiacData = [
  { yearMod: 0,  name: "Rat",    src: "img/rat.webp" },
  { yearMod: 1,  name: "Ox",     src: "img/ox.webp" },
  { yearMod: 2,  name: "Tiger",  src: "img/tiger.webp" },
  { yearMod: 3,  name: "Rabbit", src: "img/rabbit.webp" },
  { yearMod: 4,  name: "Dragon", src: "img/dragon.webp" },
  { yearMod: 5,  name: "Snake",  src: "img/snake.webp" },
  { yearMod: 6,  name: "Horse",  src: "img/horse.webp" },
  { yearMod: 7,  name: "Goat",   src: "img/goat.webp" },
  { yearMod: 8,  name: "Monkey", src: "img/monkey.webp" },
  { yearMod: 9,  name: "Rooster",src: "img/rooster.webp" },
  { yearMod: 10, name: "Dog",    src: "img/dog.webp" },
  { yearMod: 11, name: "Pig",    src: "img/pig.webp" }
];

function getZodiacByYear(year) {
  const offset = 1924; 
  let index = (year - offset) % 12;
  if (index < 0) index += 12; 
  return zodiacData.find(z => z.yearMod === index);
}

document.getElementById("submitBtn").addEventListener("click", function() {
  const yearInput = document.getElementById("birthyear").value.trim();
  const birthYear = parseInt(yearInput, 10);

  if (isNaN(birthYear)) {
    alert("Please enter a valid year, e.g. 1990.");
    return;
  }

  if (birthYear < 1900 || birthYear > 2100) {
    alert("Please enter a year between 1900 and 2100.");
    return;
  }

  const zodiac = getZodiacByYear(birthYear);
  if (!zodiac) {
    alert("Could not determine zodiac for that year.");
    return;
  }

  document.getElementById("zodiacImage").src = zodiac.src;
});
