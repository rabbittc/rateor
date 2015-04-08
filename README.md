# Rateor 0.0.3
Meteor boilerplate for Rabbit Training Center.

### Usage
- Copy the sample module and rename

    Ex: rabbit

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
                        |_t9n   // translations language
                            en.js
                            kh.js
                        namespace.js
                    |_methods   // other libraries
                        list.js
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
- Config new module and set roles in `app/both/lib/config/module.js`

    Ex:

        .....
        .....
        // Rabbit
        Module.Rabbit = {
            name: 'Rabbit Project',
            version: '0.0.1',
            title: 'Rabbit Title',
            description: 'Rabbit Management System',
            roles: [
                'admin',
                'general',
                'reporter'
            ]
        };
- Config namespace in `rabbit/both/lib/config/namespace.js` to use collection, schema, tabular and other libraries

    Ex:

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
- Create security method in `rabbit/server/security.js`

    Ex:

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
- Create home page (router, template)
- Config menu bar in `rabbit/client/templates/layout/navbar.html`
- Create list view of select options in `rabbit/both/lib/methods/list.js`

    Ex:

        /**
         * List
         */
        Rabbit.List = {
            gender: function () {
                var list = [
                    {label: 'Male', value: 'M'},
                    {label: 'Female', value: 'F'}
                ];

                return list;
            },
            address: function () {
                var list = Rabbit.Collection.Address.find()
                    .map(function (obj) {
                        return {label: obj._id + ' : ' + obj.name, value: obj._id};
                    });

                return list;
            }
        };
- Create any methods (server, client or both)
- Create `Test CRUD`: collection, security in `rabbit/server/security/security.js`, publish/sub, tabular, router, template...

### Internal methods
- IDGenerator in `app/both/lib/methods`

    Ex:

        var id = IDGenertor.gen(collection, field, length);
        var id = IDGenertor.genWithPrefix(collection, field, prefix, length);
- Relation Exist in `rabbit/both/lib/methods`

    Ex:

        var relation = relationExist(
            [
                {collection: collectionObject, selector: {selector: value}},
                {collection: collectionObject, selector: {selector: value}}
            ]
        )
- DateTimePicker in `rabbit/client/lib/methods`

    Ex:

        Template.templateName.onRendered(function(){
            var name = $('[name="date"]');
            DateTimePicker.date(name);
        })
- Render Template in `rabbit/client/lib/methods`

    Ex:

        // Use with bootbox
        var data = {name: value, gender: value};
        bootbox.dialog({
                    message: renderTemplate(Template.rabbit_testShow, data),
                    title: "Title"
                });

- Modal Template in `rabbit/client/lib/methods`

    Ex:

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

- Modal Max Height in `rabbit/client/lib/methods`

    Ex:

        // Use with bootbox
        'click .show': function (e, t) {
            bootbox.dialog({
                message: renderTemplate(Template.sample_testShow, this),
                title: "Test Info"
            });
            modalMaxHeight();
        }
- Alertify

    Ex:

        // How to use custom
        createCustomAlert(["customer", "addressAddon"]);

        alertify.customCustomer(renderTemplate(Template.sample_customerInsert))
            .set({
                title: "<i class='fa fa-plus'></i> Customer"
            })
            .maximize(); // auto full screen

        // How to close
        alertify.customCustomer().close(); // alertify.customCustomer() && alertify.customCustomer().close();

        // How to get data
        var $customers = $(alertify.customCustomer().elements.content);
        alert($customers.find("#name"));


### Note
- Router name: `rabbit.routerName`, Url `rabbit/routerName`
- Router name for report: rabbit.routerName`Report`, Url: rabbit/routerName`Report` and rabbit/routerName`ReportGen`
- Template name: `rabbit_templateName`
- Template name for report: rabbit_templateName`Report`, rabbit_templateName`ReportGen`
- Method name: `rabbitMethodName`
- Publish name: `rabbitPubName`
- Security method name: `rabbitIfSecurityName`
- Session: `currentModule` and `currentBranch`

### Changelog
- v 0.0.3 (2014-04-08)
    - add daterangepicker
- v 0.0.2 (2014-04-07)
    - add alertify js (can use multiple alert)
- v 0.0.1 (2014-04-01)
