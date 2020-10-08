# @pathscale/eslint-plugin-vue3

linting rules to help enforce our rather limited view of the world.. Highly
opinionated and not for everyone

Currently requires `eslint-plugin-vue`.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@pathscale/eslint-plugin-vue3`:

```
$ npm install @pathscale/eslint-plugin-vue3 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must
also install `@pathscale/eslint-plugin-vue3` globally.

## Usage

Add `@pathscale/vue3` to the plugins section of your `.eslintrc` configuration
file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@pathscale/vue3"
    ]
}
```


Then configure the rules you want to use under the rules section. Defaults
shown below.

```js
{
    "rules": {
        "@pathscale/vue3/v-directive": ["error", {
            // Add AST that should always be allowed
            "safe": [
                "Literal",
                "Identifier",
                // This only allows the inner template elements; one can still
                //   block `TemplateLiteral`
                "TemplateElement"
            ],

            // Add AST that should not be allowed
            "unsafe": [
                // These just add a single operator, so not blocked by default
                // 'SpreadElement',
                // 'UnaryExpression',

                // This can have design features so not blocking by default
                // 'TemplateLiteral',

                // Note: in avoiding these, one can use a call expression
                "AssignmentExpression",
                "BinaryExpression",
                "LogicalExpression",
                "ConditionalExpression",
            ],

            // Add AST that should not be allowed except at root
            "unsafeNested": [
                "CallExpression"
            ]
        }]
    }
}
```

## Supported Rules

- `@pathscale/vue3/v-directive` - See example above
