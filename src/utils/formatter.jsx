const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

// flagemojiToPNG
const formatEmoji = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCode}.png`}
      alt="flag"
      code={flag}
    />
  );
};

const convertCountryCodeToEmoji = (countryCode) => {
  return countryCode
    .toUpperCase() // Pastikan kode negara dalam huruf besar
    .split("") // Pisahkan setiap karakter dari kode negara
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397)) // Ubah menjadi emoji bendera
    .join(""); // Gabungkan kembali
};

export { formatDate, formatEmoji, convertCountryCodeToEmoji };
