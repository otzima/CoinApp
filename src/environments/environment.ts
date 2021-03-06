// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: "e399ede7bd62a2cb67368f2f1d8ad45ae8bce6deb8d72489ebc3995b4c67c094", // API KEY in URL - just append ? or &api_key={your_api_key} the the end of your request url
  apiUrl: "https://min-api.cryptocompare.com/data/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

