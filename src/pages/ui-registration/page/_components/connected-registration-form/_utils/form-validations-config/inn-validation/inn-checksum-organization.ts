export const checksumINNOrganization = (inn: number[]): boolean =>
  inn.length === 10 &&
  inn[9] ===
    ((2 * inn[0] +
      4 * inn[1] +
      10 * inn[2] +
      3 * inn[3] +
      5 * inn[4] +
      9 * inn[5] +
      4 * inn[6] +
      6 * inn[7] +
      8 * inn[8]) %
      11) %
      10;
