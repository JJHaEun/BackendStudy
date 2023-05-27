import {
  checkPersonInfoNumber,
  InfoPersonNumberLength,
} from "./resident-registration-number.js";

export const customRegistrationNumber = (infoNum) => {
  const isValid = checkPersonInfoNumber(infoNum);
  if (isValid) {
    InfoPersonNumberLength(infoNum);
  }
  return true;
};
customRegistrationNumber("210510-1010101");
// customRegistrationNumber("210510-1010101010101");
// customRegistrationNumber("2105101010101");
