import {
  checkPersonInfoNumber,
  InfoPersonNumberLength,
} from "./resident-registration-number.js";

const customRegistrationNumber = (infoNum) => {
  checkPersonInfoNumber(infoNum);
  InfoPersonNumberLength(infoNum);
};
customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");
