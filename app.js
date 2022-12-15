const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth')

initializeApp({
    credential: applicationDefault(),
});

states = {
    enabled: 'ENABLED',
    disabled: 'DISABLED',
}

//TENANT CONFIG MANAGEMENT

/* Request Tenant : Feel free to tweak these fields*/
/*
const requestTenant = {
    displayName: "tenantTest",
    multiFactorConfig: {
        state: states.enabled,
        factorIds: ['phone'],
        providerConfigs: [
            {
                state: states.enabled,
                totpProviderConfig: {
                    adjacentIntervals: 5,
                },
            },
        ],
    },
};
*/


//Create Tenant
/*
getAuth()
    .tenantManager()
    .createTenant(requestTenant)
    .then(
        (createdTenant) =>
            console.log(JSON.stringify(createdTenant))
    );
*/

//Update Tenant
/*
let tenant_id; //populate this field with "tenantId" obtained from createTenant() output
getAuth()
    .tenantManager()
    .updateTenant(tenant_id, createTenantReq)
    .then(
        (updatedConfig) =>
            console.log(JSON.stringify(updatedConfig))
    );
*/

//Get Tenant Config
/*
getAuth()
    .tenantManager()
    .getTenant(tenant_id)
    .then(
        (getTenantResult) => {
            console.log(getTenantResult);
        }
    );
*/

//PROJECT CONFIG MANAGEMENT

// Get Project Config
/*
getAuth()
    .projectConfigManager()
    .getProjectConfig()
    .then(
        (projectConfigResult) => {
            console.log(JSON.stringify(projectConfigResult));
        }
    );
*/

/*Project Config update request - feel free to tweak these fields*/
/*
const updatedProjectConfig = {
    multiFactorConfig: {
        state: states.enabled,
        factorIds: ['phone'],
        providerConfigs: [
            {
                state: states.enabled,
                totpProviderConfig: {
                    adjacentIntervals: 5,
                },
            },
        ]
    },
};
*/


//Update Project's config
/*
getAuth()
    .projectConfigManager()
    .updateProjectConfig(updatedProjectConfig)
    .then(
        (updateProjectConfigResult) => {
            console.log(JSON.stringify(updateProjectConfigResult));
        }
    );
*/
