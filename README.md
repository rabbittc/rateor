# Rateor Boilerplate 
Meteor boilerplate for Rabbit Training Center.

## Usage
- Copy the sample module and rename
```js
// Structure
|_rabbit
    |_both  // run at server and client
        |_collections   // for collection and schema
            |_reports
                |_myReport.js
            myCollection.js
        |_collectionsHelper
        |_lib   // other file or libraries load first
            |_config    // configuration file
                module.js
                namespace.js
            list.js // list view for select box
        |_routers
            |_reports
                myReport.js
            home.js
        |_tabulars
            myTabular.js
    |_client
        |_app   // other file or libraries load first on client
            |_config
            |_helpers
            |_methods
            |_startup
            |_subscriptions
        |_css
        |_templates
            |_layout    // menu bar
                navbar.html
            |_myTemplate
                myTemplate.html
                myTemplate.js
            |_reports
                |_myReport
                    myReport.html
                    myReprot.js
    |_server
        |_app   // other file or libraries load first on server
            security.js
        |_methods
        |_publications
            publications.js
        |_security
            security.js
        |_startup
            startup.js
```

- Config new module and set roles in `rabbit/both/lib/config/module.js`
```js
/**
 * Module
 */
Module = typeof Module === 'undefined' ? {} : Module;
Meteor.isClient && Template.registerHelper('Module', Module);

Module.Rabbit = {
    name: 'Rabbit Project',
    version: '0.0.1',
    summary: 'Rabbit Management System is ...',
    roles: [
        'admin',
        'general',
        'reporter'
    ]
};
```

- Config namespace in `rabbit/both/lib/config/namespace.js` to use collection, schema, tabular and other libraries
```js
/**
 * Namespace
 */
Rabbit = {};

Meteor.isClient && Template.registerHelper('Rabbit', Rabbit);

/* Collection */
Rabbit.Collection = {};

/* Schema */
Rabbit.Schema = {};

/* Tabular */
Rabbit.TabularTable = {};
```

- Create security method in `rabbit/server/app/security.js`
```js
/**
 * Admin
 */
Security.defineMethod("rabbitIfAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['admin'], 'Rabbit');
    }
});

/**
 * General
 */
Security.defineMethod("rabbitIfGeneral", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['general'], 'Rabbit');
    }
});

/**
 * Reporter
 */
Security.defineMethod("rabbitIfReporter", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['reporter'], 'Rabbit');
    }
});
```

- Create home page (router, template)
- Config menu bar in `rabbit/client/templates/layout/navbar.html`
```js
<template name="rabbit_navbar">
    ...
</template>
```

- Create list view of select options in `rabbit/both/lib/methods/list.js`
```js
/**
 * List
 */
Rabbit.List = {
    gender: function (selectOne) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "(Select One)", value: ""});
        }

        list.push({label: 'Male', value: 'M'});
        list.push({label: 'Female', value: 'F'});

        return list;
    },
    address: function (selectOne) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "(Select One)", value: ""});
        }

        Rabbit.Collection.Address.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });

        return list;
    }
};
```

- Create any methods (server, client or both)
- Create `Test CRUD`: collection, security in `rabbit/server/security/security.js`, publish/sub, tabular, router, template...

## Packages
- jquery
- underscore
- underscorestring:underscore.string
- coffeescript
- markdown
- twbs:bootstrap
- fortawesome:fontawesome
- accounts-password
- ian:accounts-ui-bootstrap-3
- iron:router
- zimme:iron-router-active
- rainhaven:iron-seo
- multiply:iron-router-progress
- francocatena:status
- aldeed:collection2
- dburles:collection-helpers
- aldeed:simple-schema
- aldeed:autoform
- natestrauser:select2
- zimme:select2-bootstrap3-css
- aldeed:autoform-select2
- momentjs:moment
- rajit:bootstrap3-datepicker
- aldeed:autoform-bs-datepicker
- tsega:bootstrap3-datetimepicker
- aldeed:autoform-bs-datetimepicker
- loftsteinn:bootstrap3-daterangepicker
- aldeed:tabular
- mizzao:bootboxjs
- ovcharik:alertifyjs
- u2622:persistent-session
- ongoworks:security
- alanning:roles
- meteorhacks:fast-render
- reywood:publish-composite
- meteorhacks:subs-manager
- dburles:spacebars-tohtml
- raix:handlebar-helpers
- netanelgilad:excel
- pcel:accounting
- bigdsk:inputmask
- manuelschoebel:wait-on-lib
- risul:chance
- simple:reactive-method
- theara:id-generator
- theara:relation-exist
- theara:moneyjs
- theara:fa-helpers
- reactive-var
- numeral:numeral

## Internal libraries
- DateTimePicker in `rabbit/client/app/methods`
```js
Template.templateName.onRendered(function(){
    var name = $('[name="date"]');
    DateTimePicker.date(name);

    // .date(), .dateTime(), .time(), .date2(), .dateRange(), .dateTimeRange()
})
```

- Render Template in `rabbit/client/app/methods`
```js
// Use with bootbox
var data = {name: value, gender: value};
bootbox.dialog({
            message: renderTemplate(Template.rabbit_testShow, data),
            title: "Title"
        });
```

- Modal Template in `rabbit/client/app/methods`
```js
// Template
<template name="sample_testInsert">

    <div class="modal fade" data-backdrop="static" id="sample_testInsertModal">
        <div class="modal-dialog  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Test Insert</h4>
                </div>

                {{#autoForm collection=Sample.Collection.Test id="sample_testInsert" type="insert"}}
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                {{> afQuickField name='name'}}
                                {{> afQuickField name='gender' options=Sample.List.gender}}
                                {{> afQuickField name='address'}}
                            </div>
                            <div class="col-md-6">
                                {{> afQuickField name='telephone'}}
                                {{> afQuickField name='email'}}
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Save</button>
                        <button type="reset" class="btn btn-default">Reset</button>
                    </div>
                {{/autoForm}}

            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

</template>

// Js
'click .insert': function (e, t) {
   var data = {name: value, gender: value};
   ModalTemplate.show('sample_testInsert', data);
},
```

- Modal Max Height in `rabbit/client/app/methods`
```js
// Use with bootbox
'click .show': function (e, t) {
    bootbox.dialog({
        message: renderTemplate(Template.sample_testShow, this),
        title: "Test Info"
    });
    modalMaxHeight();
}
```

- Alertify in `rabbit/client/app/methods`
```js
// How to use custom
createNewAlertify("customer"); // Call in template create/render

alertify.customer(renderTemplate(Template.sample_customerInsert))
    .set({
        title: "<i class='fa fa-plus'></i> Customer"
    })
    .maximize(); // auto full screen

// How to create multiple 
createNewAlertify(["customer", "addressAddon"]);// Call in template create/render

// How to close
alertify.customer().close();

// How to get data
var $customers = $(alertify.customer().elements.content);
alert($customers.find("#name"));
```

- Get current datetime from server
```js
// Default call
Meteor.call('currentDate', function (error, result) {
    // result 'YYYY-MM-DD H:mm:ss'
    ...
});

// Reactive call
var currentDate = ReactiveMethod.call("currentDate"); // 'YYYY-MM-DD H:mm:ss'
```

## Note
- Router name: `rabbit.routerName`, Url `rabbit/routerName`
- Router name for report: rabbit.routerName`Report`, Url: rabbit/routerName`Report` and rabbit/routerName`ReportGen`
- Template name: `rabbit_templateName`
- Template name for report: rabbit_templateName`Report`, rabbit_templateName`ReportGen`
- Method name: `rabbit_methodName`
- Publish name: `rabbit_pubName`
- Security method name: `rabbit_ifSecurityName`
- Session: `currentModule` and `currentBranch`
- Collections:
    - Setting()
    - User()
    - Branch()
    - Currency()
    - Exchange()
