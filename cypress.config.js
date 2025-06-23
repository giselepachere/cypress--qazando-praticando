const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  projectId: '47hyek',  
  e2e: {
    reporter: 'cypress-mochawesome-reporter',  
    reporterOptions: {
      charts: true,   // são gráficos
      reportTitle:'Projeto curso Cypress Qazando',
      reportPageTitle: 'Projeto curso Cypress Qazando',
    },  
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
      setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});



    
  
       
  

