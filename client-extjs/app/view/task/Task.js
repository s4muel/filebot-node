/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FileBot.view.task.Task', {
    extend: 'Ext.container.Container',
    requires: [
        'FileBot.view.task.TaskController',
        'FileBot.view.task.TaskModel',
        'FileBot.store.RenameActions'
    ],

    xtype: 'section-task',

    controller: 'task',
    viewModel: {
        type: 'task'
    },

    layout: 'vbox',

    items: [{
        xtype: 'form',
        title: 'Organize Files',
        bodyPadding: 20,
        items: [{
            xtype: 'fieldset',
            title: 'Basic Options',

            items: [{
                xtype: 'textfield',
                fieldLabel: 'Input Folder',
                name: 'input',
                emptyText: '/path/to/input',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Output Folder',
                name: 'output',
                emptyText: '/path/to/output',
                allowBlank: false
            }, {
                xtype: 'checkboxfield',
                name: 'strict',
                fieldLabel: 'Strict Mode',
                boxLabel: 'enabled'
            }, {
                xtype: 'combobox',
                reference: 'states',
                publishes: 'value',
                fieldLabel: 'Rename Action',
                displayField: 'action',
                store: {
                    type: 'rename-actions'
                },
                value: 'DUPLICATE',
                queryMode: 'local',
                editable: false,
                forceSelection: true,
                allowBlank: false
            }]
        }],

        buttons: [{
            text: 'Execute',
            formBind: false,
            disabled: false,
            listeners: {
                click: 'onExecute'
            }
        }]
    }]
});
