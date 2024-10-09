const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

// flagemojiToPNG
const formatEmoji = (flag) => {
  let countryCode = Array.from(flag)
    .map((char) => String.fromCodePoint(char.codePointAt(0) - 127397))
    .join("")
    .toLowerCase();

  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCode}.png`}
      alt={`flag of ${countryCode}`}
    />
  );
};

export { formatDate, formatEmoji };
