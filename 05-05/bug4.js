var amount = 20;
var service = "fair";

if (service === "good") {
  console.log("Tip is " + amount * 1.20);
} else if (service === "fair") {
  console.log("Tip is " amount * 1.15);
} else if (service === "bad") {
  console.log("Tip is " + amount * 1.10);
}
