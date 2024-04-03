const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth')

initializeApp({
    credential: applicationDefault(),
});

//TENANT CONFIG MANAGEMENT
// 1. Create
// // a. create a tenant
// getAuth().tenantManager().createTenant('passkeys-demo').then((createdTenant) => {
//     console.log(JSON.stringify(createdTenant.tenantId));
// })

// // b. Copy tenantId from the created tenant here
// const tenantId = 'passkeys-sample-s230z';
// /*  Tenant Request: Feel free to tweak these fields*/
// const tenantRequest = {
//     rpId: "tenant-id.firebase.app",
//     expectedOrigins: ["example1.com", "app1"],
// };
// // create passkey config for this tenant
// getAuth()
//     .passkeyConfigManager()
//     .createPasskeyConfig(tenantRequest, tenantId)
//     .then(
//         (createdPasskeys) =>
//             console.log(JSON.stringify(createdPasskeys))
//     );

// //2. Get Tenant
// getAuth()
//     .passkeyConfigManager()
//     .getPasskeyConfig(tenantId)
//     .then(
//         (passkeyConfig) =>
//             console.log(JSON.stringify(passkeyConfig))
//     );


// //3. Update Tenant
// const updateTenantRequest = {
//     expectedOrigins: undefined,
// };
// getAuth()
//     .passkeyConfigManager()
//     .updatePasskeyConfig(updateTenantRequest, tenantId)
//     .then(
//         (updatedConfig) =>
//             console.log(JSON.stringify(updatedConfig))
//     );


//PROJECT CONFIG MANAGEMENT

// // 4. Create Passkey Config - cannot be reversed
// const createPasskeyConfigRequest = {
//     rpId: "project-id.firebase.app",
//     expectedOrigins: ["example1.com", "app1"],
// };
//
// getAuth()
//     .passkeyConfigManager()
//     .createPasskeyConfig(createPasskeyConfigRequest)
//     .then(
//         (updateProjectConfigResult) => {
//             console.log(JSON.stringify(updateProjectConfigResult));
//         }
//     );

// // 5. Get Passkey Project Config
// getAuth()
//     .passkeyConfigManager()
//     .getPasskeyConfig()
//     .then(
//         (projectConfigResult) => {
//             console.log(JSON.stringify(projectConfigResult));
//         }
//     );

// // 6. Update Project's config
// //Project Config update request - feel free to tweak these fields
// const updatedPasskeyConfig = {
//     rpId: 'rpId',
//     expectedOrigins: ['app1', 'app12'],
// };
//
// getAuth()
//     .passkeyConfigManager()
//     .updatePasskeyConfig(updatedPasskeyConfig)
//     .then(
//         (updateProjectConfigResult) => {
//             console.log(JSON.stringify(updateProjectConfigResult));
//         }
//     );


// //7. Get user info
// getAuth().getUser(<UID>).then((user) => console.log(JSON.stringify(user.passkeyInfo)));
