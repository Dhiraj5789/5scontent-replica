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
export const singleLetterElement =
  elementsArr.length > 1 &&
  elementsArr.filter((element) => element.length === 1);
export const doubleLetterElement =
  elementsArr.length > 1 &&
  elementsArr.filter((element) => element.length === 2);
export default elementsArr;
