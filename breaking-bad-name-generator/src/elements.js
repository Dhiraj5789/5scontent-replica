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

export function IterateDouble(str) {
  const arr = str.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    const elementSearch = doubleLetterElement.find(
      (element) => element.toLowerCase() === (arr[i] + arr[i + 1]).toLowerCase()
    );
    if (elementSearch) {
      console.log(elementSearch);
      const elementIndex = doubleLetterElement.indexOf(elementSearch);
      if (elementIndex !== -1) doubleLetterElement.splice(elementIndex, 1);
      console.log(doubleLetterElement);
      return elementSearch;
    }
  }
}

export function IterateSingle(str) {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    const elementSearch = singleLetterElement.find(
      (element) => element.toLowerCase() === arr[i].toLowerCase()
    );
    if (elementSearch) {
      console.log(elementSearch);
      return elementSearch;
    }
  }
}

export default elementsArr;
