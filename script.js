const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input")
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const originalSentence = textInput.value;
  
  if (originalSentence.trim() === "") {
    alert("Please input a value");
    result.innerText = "";
    return;
  }

  const alphaNumericCharacters = nonAlphanumericRemoval(originalSentence);
  const reversedString = reverseString(alphaNumericCharacters);
  conditionCheck(originalSentence, alphaNumericCharacters, reversedString);
});

const nonAlphanumericRemoval = (originalSentence) => {
    return originalSentence.split(" ").map((el) => el.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()).join("");
}
const reverseString = (alphaNumericCharacters) => {
    return alphaNumericCharacters.split("").reverse().join("");
}

const conditionCheck = (oS, aC, rS) => {
  if (aC === rS) {
    result.innerText = `${oS} is a palindrome.`;
  }else {
    result.innerText = `${oS} is not a palindrome.`;
  }
}