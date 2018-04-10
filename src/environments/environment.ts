// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // api gateway url
  ApiGateway: 'https://g1d9cdvv47.execute-api.eu-west-1.amazonaws.com/dev/xp-taxcalc',

  // round
  roundFacotor: 0.05,

  // national rate
  foodNationalRate: 0,
  medicalNationalRate: 0,
  booksNationalRate: 0,
  basicNationalRate: 10,

  // importation rates
  foodImportedRate: 5,
  medicalImportedRate: 5,
  booksImportedRate: 5,
  basicImportedRate: 5,

  // products categories codes
  medicalCode: 'MEDX001',
  foodCode: 'FOODX001',
  bookCode: 'BOOKX001',
  otherCode: 'OTHERX001'
};
