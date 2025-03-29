const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is nan and how can we check for it",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(" ").map(word => {
      let lowerCaseWord = word.toLowerCase();
      if (lowerCaseWord === "oo") return "OO";
      if (lowerCaseWord === "api") return "API";
      if (lowerCaseWord === "nan") return "NaN";
      if (lowerCaseWord === "stoppropagation") return "StopPropagation";
      if (lowerCaseWord === "preventdefault") return "PreventDefault"; // Fix here
      if (lowerCaseWord === "jsonp") return "JSONP"; // Fix here
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });
};

console.log(titleCased());
