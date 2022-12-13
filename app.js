const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth')

initializeApp({
    credential: applicationDefault(),
});

//TENANT CONFIG MANAGEMENT

// const createTenantReq = {
//     displayName: "whateverTenant",
//     multiFactorConfig: {
//         state: 'DISABLED',
//         providerConfigs: [
//             {
//                 state: "ENABLED",
//                 totpProviderConfig: {
//                     adjacentIntervals: 5,
//                 },
//             },
//         ],
//     },
// }
//getAuth().tenantManager().createTenant(createTenantReq).then((updatedConfig) => console.log(JSON.stringify(updatedConfig)));

//let tenant_id;
//getAuth().tenantManager().updateTenant("whateverTenant-1qvcc", createTenantReq).then((updatedConfig) => console.log(JSON.stringify(updatedConfig)));

// getAuth().tenantManager().getTenant("whateverTenant-1qvcc").then((getTenantResult) => {
//     console.log(getTenantResult);
// });

//PROJECT CONFIG MANAGEMENT

// getAuth().projectConfigManager().getProjectConfig().then((projectConfigResult) => {
//     console.log(JSON.stringify(projectConfigResult));
// });

// getAuth().projectConfigManager().updateProjectConfig({
//     mfa: {
//         state: 'DISABLED',
//         providerConfigs: [
//             {
//                 state: 'DISABLED',
//                 totpProviderConfig: {
//                     adjacentIntervals: 5,
//                 },
//             },
//         ],
//     },
// }).then((updateProjectConfigResult) => {
//     console.log(JSON.stringify(updateProjectConfigResult));
// });
