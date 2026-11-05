const students = [
  { name: "Thaufan", score: 95 },
  { name: "Reyvan", score: 70 },
  { name: "Leonel", score: 85 },
  { name: "Michael", score: 60 },
  { name: "Doyok", score: 90 }
];

console.log("=== DATA AWAL SISWA ===");
console.log(students);

console.log("\n--- 1. forEach() ---");
students.forEach(student => {
  console.log(`Siswa: ${student.name} | Nilai: ${student.score}`);
});

console.log("\n--- 2. filter() (Nilai >= 75) ---");
const lulus = students.filter(student => student.score >= 75);
console.log(lulus);

console.log("\n--- 3. map() (Nama Siswa) ---");
const names = students.map(student => student.name);
console.log(names);

console.log("\n--- 4. find() (Mencari siswa pertama dengan nilai >= 90) ---");
const juara = students.find(student => student.score >= 90);
console.log(juara);

console.log("Daftar siswa yang lulus ");
console.log(lulus);

console.log("Daftar nama siswa");
console.log(names);

console.log("Siswa dengan nilai tertinggi");
console.log(juara);

