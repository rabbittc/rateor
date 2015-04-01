# Rateor 0.0.1
Meteor boilerplate

### Usage
- copy the sample module and rename. Ex: `rabbit`
- config new module and set roles `app/both/lib/config/module.js`
- config namespace `rabbit/both/lib/config/namespace.js`: collection, schema and tabular
- create security method `rabbit/server/security.js`
- create home page
- config menu bar `rabbit/client/templates/layout/navbar.html`
- create list view of select options `rabbit/both/lib/methods/list.js`
- create any methods (server, client)
- create `Test CRUD`: collection, security `rabbit/server/security/security.js`, publish/sub, tabular, router, template...

### Internal methods
- IDGenerator `rabbit/both/lib/methods`
- Message `rabbit/both/lib/methods`
- Relation Exist `rabbit/both/lib/methods`
- Money JS `rabbit/both/lib/methods`


- DateTimePicker `rabbit/client/lib/methods`
- Render Template for bootbox.dialog(...) `rabbit/client/lib/methods`
- Modal Template `rabbit/client/lib/methods`
- Modal Max Height `rabbit/client/lib/methods`


### Note
- Router name: `rabbit.routerName`, Url `rabbit/router_name`
- Router name for report: `rabbit.routerName.rpt`, Url `rabbit/router_name/rpt` and `rabbit/router_name/gen`
- Template name: `rabbit_templateName`
- Template name for report: `rabbit_templateName_rpt`, `rabbit_templateName_rptHeader`, `rabbit_templateName_rptContent`, `rabbit_templateName_rptFooter`
- Method name: `rabbit_methodName`
- Publish name: `rabbit_pubName`
- Security name: `rabbit_ifSecurityName`, Ex: `rabbit_ifAdmin`, `rabbit_ifInsert`, `rabbit_ifReport`...
- Session: `currentModule` and `currentBranch`

### Changelog
- v 0.0.1 (2014-04-01)
