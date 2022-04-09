// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'alkemy-somos-mas',
    appId: '1:28868089907:web:85c0767bcdd0a606672b46',
    storageBucket: 'alkemy-somos-mas.appspot.com',
    apiKey: 'AIzaSyCBN98jczqgU_gJFcBjFu4AE4ZXZMYFB1Y',
    authDomain: 'alkemy-somos-mas.firebaseapp.com',
    messagingSenderId: '28868089907',
  },
  production: false,
  BASE_URL_API: "https://ongapi.alkemy.org/api/",
  API_URL_SLIDES: "https://ongapi.alkemy.org/api/slides",
  API_URL_USERS: "https://ongapi.alkemy.org/api/users",
  API_URL_CATEGORIES: 'https://ongapi.alkemy.org/api/categories',
  API_URL_ACTIVITIES: "https://ongapi.alkemy.org/api/users",
  API_URL_ORGANIZATION: 'https://ongapi.alkemy.org/api/organization',
  API_URL_MEMBERS: 'https://ongapi.alkemy.org/api/members',
  API_URL_NEWS: 'https://ongapi.alkemy.org/api/news',
  API_URL_CONTACTS: 'https://ongapi.alkemy.org/api/contacts'  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
