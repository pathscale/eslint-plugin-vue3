/**
 * @fileoverview Report undesired content within `v` directives
 * @author PathScale (https://vue3.dev/)
 */
'use strict';

const rule = require('../../../lib/rules/v-directive'),
    { RuleTester } = require('eslint');

const ruleTester = new RuleTester();
ruleTester.run('v-directive', rule, {
    valid: [
        // give me some code that won't trigger a warning
    ],
    invalid: [
        {
            code: 'a && b',
            errors: [{
                message: 'Fill me in.',
                type: 'Me too'
            }]
        }
    ]
});
