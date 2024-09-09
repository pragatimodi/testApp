const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth')

initializeApp({
    credential: applicationDefault(),
});

// GET PROJECT CONFIG
// getAuth()
//     .projectConfigManager()
//     .getProjectConfig()
//     .then(
//         (projectConfigResult) => {
//             console.log(JSON.stringify(projectConfigResult.recaptchaConfig, null, 2));
//         }
//     );
    

//UPDATE PROJECT CONFIG
// const recaptchaConfig  = {
//     phoneEnforcementState: 'AUDIT',
//     managedRules: [
//         {
//         endScore: 0.1,
//         action: 'BLOCK',
//         },
//     ],
//     useAccountDefender: true,
//     useSmsBotScore: true,
//     useSmsTollFraudProtection: false,
//     smsTollFraudManagedRules: [
//         {
//         startScore: 0.8,
//         action: 'BLOCK',
//         },
//     ],
// }

// getAuth().projectConfigManager().updateProjectConfig({
//     recaptchaConfig,
// }).then(
//     (updateProjectConfigResult) => {
//         console.log(JSON.stringify(updateProjectConfigResult.recaptchaConfig, null, 2));
//     }
// );

// TENANT CONFIG 
getAuth()
    .tenantManager()
    .createTenant({displayName: requestTenant.displayName})
    .then(
        (createdTenant) =>
            console.log(JSON.stringify(createdTenant, null, 2))
    );
    
    
let tenantId = "some-tenantId"; // use the tenantId from the created tenant
const recaptchaConfig = {
    phoneEnforcementState: 'AUDIT',
    managedRules: [
        {
        endScore: 0.1,
        action: 'BLOCK',
        },
    ],
    useAccountDefender: true,
    useSmsBotScore: true,
    useSmsTollFraudProtection: false,
    smsTollFraudManagedRules: [
        {
        startScore: 0.8,
        action: 'BLOCK',
        },
    ],
};

// UPDATE TENANT CONFIG
getAuth()
    .tenantManager()
    .updateTenant(tenantId, {recaptchaConfig})
    .then(
        (updatedConfig) =>
            console.log(JSON.stringify(updatedConfig, null, 2))
    );

// GET TENANT CONFIG
// getAuth()
//     .tenantManager()
//     .getTenant(tenantId)
//     .then(
//         (getTenantResult) => {
//             console.log(JSON.stringify(getTenantResult, null, 2));
//         }
//     );
