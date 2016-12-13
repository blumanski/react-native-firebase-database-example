class AppConfig {

  static getConfig() {
    return {
        'app' : {
            title: 'Firebase Database Example'
        },
        'firebaseConfig' : {
                apiKey: "apikey",
                authDomain: "authdomain",
                databaseURL: "dburl",
                storageBucket: "optional",
                messagingSenderId: "optional"
        }
    }
  }
}

export default AppConfig;
