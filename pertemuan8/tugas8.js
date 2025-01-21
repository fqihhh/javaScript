let nilaiSusulanIT = 91;

if (nilaiSusulanIT >= 91) {
  console.log("A");
} else if (nilaiSusulanIT >= 81) {
  console.log("B");
} else if (nilaiSusulanIT >= 71) {
  console.log("C");
} else {
  grade = "D"; // Asumsi grade D untuk nilai di bawah 71
}

console.log("nilaiSusulanIT");

let grade =
  nilaiSusulanIT >= 91
    ? "A"
    : nilaiSusulanIT >= 81
    ? "B"
    : nilaiSusulanIT >= 71
    ? "C"
    : "D"; // Asumsi grade D untuk nilai di bawah 71

console.log(grade);
