# Rateor 0.0.1
Meteor boilerplate

### Usage
- copy the sample module and rename. Ex: `rabbit`
- config new module and set roles `app/both/lib/config/module.js`
- config namespace `rabbit/both/lib/config/namespace.js`: collection, schema and tabular
- create security method `rabbit/server/security.js`
    Ex:

        /**
         * Admin
         */
        Security.defineMethod("rabbit_ifAdmin", {
            fetch: [],
            transform: null,
            deny: function (type, arg, userId) {
                return !Roles.userIsInRole(userId, ['admin'], 'Rabbit');
            }
        });

        /**
         * General
         */
        Security.defineMethod("rabbit_ifGeneral", {
            fetch: [],
            transform: null,
            deny: function (type, arg, userId) {
                return !Roles.userIsInRole(userId, ['general'], 'Rabbit');
            }
        });

        /**
         * Reporter
         */
        Security.defineMethod("rabbit_ifReporter", {
            fetch: [],
            transform: null,
            deny: function (type, arg, userId) {
                return !Roles.userIsInRole(userId, ['reporter'], 'Rabbit');
            }
        });

- create home page
- config menu bar `rabbit/client/templates/layout/navbar.html`
- create list view of select options `rabbit/both/lib/methods/list.js`
- create any methods (server, client)
- create `Test CRUD`: collection, security `rabbit/server/security/security.js`, publish/sub, tabular, router, template...

### Internal methods
- IDGenerator `app/both/lib/methods`

    Ex:

        var id = IDGenertor.gen(collection, field, length);
        var id = IDGenertor.genWithPrefix(collection, field, prefix, length);

- Message `rabbit/both/lib/methods`
- Relation Exist `rabbit/both/lib/methods`

    Ex:

        relationExist(
            [
                {collection: collectionObject, selector: {selector: value}},
                {collection: collectionObject, selector: {selector: value}}
            ]
        )

- Money JS `rabbit/both/lib/methods`


- DateTimePicker `rabbit/client/lib/methods`, config on `Template.templateName.onRendered(...)`
- Render Template for bootbox.dialog(...) `rabbit/client/lib/methods`
    Ex:

        var data = {name: value, gender: value};
        bootbox.dialog({
                    message: renderTemplate(Template.sample_testShow, data),
                    title: "Title"
                });

- Modal Template `rabbit/client/lib/methods`
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

- Modal Max Height `rabbit/client/lib/methods`
    Ex:

        'click .show': function (e, t) {
            bootbox.dialog({
                message: renderTemplate(Template.sample_testShow, this),
                title: "Test Info"
            });
            modalMaxHeight();
        }



### Note
- Router name: `rabbit.routerName`, Url `rabbit/router_name`
- Router name for report: `rabbit.routerName.rpt`, Url `rabbit/router_name/rpt` and `rabbit/router_name/gen`
- Template name: `rabbit_templateName`
- Template name for report: `rabbit_templateName_rpt`, `rabbit_templateName_rptHeader`, `rabbit_templateName_rptContent`, `rabbit_templateName_rptFooter`
- Method name: `rabbit_methodName`
- Publish name: `rabbit_pubName`
- Security method name: `rabbit_ifSecurityName`
- Session: `currentModule` and `currentBranch`

### Changelog
- v 0.0.1 (2014-04-01)
