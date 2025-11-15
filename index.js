const arr = [];
console.log(arr == false);

const angka = 3;
const angka2 = "10";
const kali = angka * angka2;
console.log(kali);

const price = 100000;
const isMember = false;
const discount = isMember ? 0.5 : 0.1;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

function levelUp(currentLevel, experience) {
  while (experience >= 50) {
    currentLevel++;
    experience -= 50;
  }
  return [currentLevel, experience];
}

console.log(levelUp(1, 250));

const sum = (a, b) => a + b;
