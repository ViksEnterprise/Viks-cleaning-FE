const CLEANING_TYPE = [
  "Residential cleaning",
  "Commercial cleaning",
  "End of tenancy cleaning",
  "Move-in / move-out cleaning",
  "Eco-friendly cleaning",
  "One-off and deep cleaning",
];

const PETS = [
  { label: "I have pets", key: "yes" },
  { label: "I don't have pets", key: "no" },
];

const SERVICE_FREQUENCY = ["weekly", "fornightly", "one-off"];

const PREFERED_DAY = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Flexibility",
];

const PARKING = [
  { label: "Parking is available", key: "Yes" },
  { label: "Permit and meter parking", key: "Permit/meter parking" },
  { label: "Parking is not available", key: "No" },
];

const IRONING = [
  { label: "Ironing is neede as well", key: "yes" },
  { label: "I do not want ironing", key: "no" },
];

const ACCESS = ["I will provide keys", "I will let the cleaner in"];

const TITLE = ["mr", "mrs", "miss."];

export {
  CLEANING_TYPE,
  PETS,
  SERVICE_FREQUENCY,
  PREFERED_DAY,
  PARKING,
  IRONING,
  ACCESS,
  TITLE,
};
