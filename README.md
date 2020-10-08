# eslint-plugin-vue3-dev

linting rules to help enforce our rather limited view of the world.. Highly opinionated and not for everyone

Currently requires `eslint-plugin-vue`.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-vue3-dev`:

```
$ npm install eslint-plugin-vue3-dev --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must
also install `eslint-plugin-vue3-dev` globally.

## Usage

Add `vue3-dev` to the plugins section of your `.eslintrc` configuration file.
You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "vue3-dev"
    ]
}
```


Then configure the rules you want to use under the rules section. Defaults
shown below.

```js
{
    "rules": {
        "vue3-dev/v-directive": ["error", {
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

- `vue3-dev/v-directive` - See example above
