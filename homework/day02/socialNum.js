export const getSocialNumber = (infoNum) => {
  const inFoSplit = infoNum.split("-");

  const front = inFoSplit[0];
  const back = inFoSplit[1];

  const result = `${front}-${back[0]}******`;
  return result;
};
