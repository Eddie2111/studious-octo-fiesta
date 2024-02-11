function getQuote() {
  const quotes = [
    `"Don't cry because it's over, smile because it happened." - Dr. Seuss`,
    `"Be the change that you wish to see in the world." - Mahatma Gandhi`,
    `"It does not do to dwell on dreams and forget to live." - J.K. Rowling, Harry Potter and the Sorcerer's Stone`,
    `"You only live once, but if you do it right, once is enough." - Mae West`,
    `"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover." - Mark Twain`,
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quote").innerHTML = randomQuote;
}
getQuote();

// added event listener after the DOM load
document.addEventListener("DOMContentLoaded", () => {
  // getting the id's required
  const convertBtn = document.getElementById("convertBtn");
  const inputValue = document.getElementById("inputValue");
  const conversionType = document.getElementById("conversionType");
  const resultElement = document.getElementById("result");

  convertBtn.addEventListener("click", function () {
    const value = parseFloat(inputValue.value);
    const type = conversionType.value;

    if (!isNaN(value)) {
      const result = convert(value, type);
      resultElement.textContent = `Result: ${result}`;
    } else {
      resultElement.textContent = "Numerical Inputs Please";
    }
  });

  function convert(value, type) {
    switch (type) {
      case "lbtokg":
        return (value * 0.4536).toFixed(2) + " kg";
      case "kgtolb":
        return (value * 2.2046).toFixed(2) + " lb";
      // ! Seriously need to find out on which case this can go wrong ! //
      default:
        return "Conversion Type Error";
    }
  }
});

function calculateStatistics() {
  const seriesInput = document.getElementById("series");
  const series = seriesInput.value.split(",").map(Number);

  const max = Math.max(...series);
  const min = Math.min(...series);
  const sum = series.reduce((acc, num) => acc + num, 0);
  const average = sum / series.length;
  const reverseOrder = series.slice().reverse();

  document.getElementById("max").textContent = max.toString();
  document.getElementById("min").textContent = min.toString();
  document.getElementById("sum").textContent = sum.toString();
  document.getElementById("average").textContent = average.toString();
  document.getElementById("reverseOrder").textContent = reverseOrder.toString();
}

function clearAll() {
    document.getElementById('textArea').value = '';
}

function capitalize() {
    const textArea = document.getElementById('textArea');
    textArea.value = textArea.value.toLowerCase() === textArea.value ? textArea.value.toUpperCase() : textArea.value.toLowerCase();
}

function sortLines() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    textArea.value = lines.sort().join('\n');
}

function reverseLines() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    textArea.value = lines.reverse().join('\n');
}

function stripBlank() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    textArea.value = lines.join('\n');
}

function addNumbers() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    const numberedLines = lines.map((line, index) => `${index + 1}. ${line}`);
    textArea.value = numberedLines.join('\n');
}

function shuffleLines() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    textArea.value = lines.join('\n');
}