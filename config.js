// config.js
module.exports = {
    environments: {
      development: 'https://dev.fravega.com/',
      staging: 'https://staging.fravega.com/',
      production: 'https://www.fravega.com/',
    },
    defaultEnvironment: 'production', // Si no se pasa ENV, usa 'production',
  
    getEnvironmentUrl: function () {
      const env = process.env.ENV || this.defaultEnvironment;
      console.log('Entorno actual:', env);  // Verifica qué entorno se está usando
      return this.environments[env];
    }
  };
  