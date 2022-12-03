const str =
  "HHeLiBeBCNOFNeNaMgAlSiPSClArKCaScTiVCrMnFeCoNiCuZnGaGeAsSeBrKrRbSrYZrNbMoTcRuRhPdAgCdInSnSbTeIXeCsBaLaCePrNdPmSmEuGdTbDyHoErTmYbLuHfTaWReOsIrPtAuHgTlPbBiPoAtRnFrRaAcThPaUNpPuAmCmBkCfEsFmMdNoLrRfDbSgBhHsMtDsRgCnNhFlMcLvTsOg";
const arr = str.split("");
let i = 0;
let elementsArr = [];
while (i < arr.length) {
  // eslint-disable-next-line eqeqeq
  if (arr[i + 1] == arr[i + 1].toLowerCase()) {
    elementsArr.push(arr[i] + arr[i + 1]);
    i += 2;
  } else {
    elementsArr.push(arr[i]);
    i++;
  }
}

const singleLetterElement =
  elementsArr.length > 1 &&
  elementsArr.filter((element) => element.length === 1);
const doubleLetterElement =
  elementsArr.length > 1 &&
  elementsArr.filter((element) => element.length === 2);

export let storeElement = "";

export function IterateDouble(str) {
  const arr = str.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    const elementSearch = doubleLetterElement.find(
      (element) => element.toLowerCase() === (arr[i] + arr[i + 1]).toLowerCase()
    );
    if (elementSearch) {
      const elementIndex = doubleLetterElement.indexOf(elementSearch);
      if (elementIndex !== -1) doubleLetterElement.splice(elementIndex, 1);
      storeElement = [elementSearch, i];
      return elementSearch;
    }
  }
  return;
}

export function IterateSingle(str) {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    const elementSearch = singleLetterElement.find(
      (element) => element.toLowerCase() === arr[i].toLowerCase()
    );
    if (elementSearch) {
      const elementIndex = singleLetterElement.indexOf(elementSearch);
      if (elementIndex !== -1) singleLetterElement.splice(elementIndex, 1);
      storeElement = [elementSearch, i];
      return elementSearch;
    }
  }
  return;
}

export function IterateMain(str) {
  if (IterateDouble(str)) return storeElement;
  if (IterateSingle(str)) return storeElement;
  return "J";
}

export default elementsArr;
