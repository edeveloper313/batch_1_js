const muslimNames =
  "Muhammad, Ahmed, Abdullah, Ibrahim, Yusuf, Hamza, Zain, Bilal, Usman, Hassan, Ali, ayaan, Saad, Rayyan, Farhan, Ayesha, Fatima, Maryam, Zainab, Hafsa, Khadija, Noor, AmNa, Hania, Iqra, Mahira, Sana, Sumayya, Alina, Dua";

const convert = muslimNames.toLowerCase();
const searchingName = "amNA";
const isAvailable = convert.includes(searchingName.toLowerCase());

if (isAvailable) {
  console.log("yes " + searchingName.toUpperCase() + " is available");
} else {
  console.log(searchingName + " is not available");
}
