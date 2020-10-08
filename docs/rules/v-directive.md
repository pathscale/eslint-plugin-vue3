# `v-directive`

Report undesired content within `v` directives.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```html
Todo
```

Examples of **correct** code for this rule:

```html
Todo
```

### Options

- `safe` - Array of AST elements that can always be considered as safe and
  needing no further inner iteration. Defaults to
  `["Literal", "Identifier", "TemplateElement"]`. Note
  that `TemplateElement` is included to avoid errors when navigating
  `TemplateLiteral`, but you can still block `TemplateLiteral`.
- `unsafe` - Array of AST elements that are desired to be reported when
  encountered. Note that if an element is not included, its inner contents
  will be checked for known AST unless `safe` removes the need. If you
  encounter unknown AST, you may report an issue/file a PR. Defaults to
  `["AssignmentExpression", "BinaryExpression", "LogicalExpression", "ConditionalExpression"]`
  Other likel encounterable AST, `SpreadElement` and `UnaryExpression`, are
  not included as they are rather simple. `TemplateLiteral` is not blocked by
  default as it can include design features but one may wish to include this.
  Note that to avoid any of these, one might use a call expression.
- `unsafeNested` -  Array of AST elements that should not be allowed though
  they will be allowed at root.<sup>*</sup> Defaults to `["CallExpression"]`.

<sup>*</sup> Note that "root" includes:
- top level AST
- AST directly within
  - the `right` side of `VForExpression`
  - the `params` of `VSlotScopeExpression`
  - the `object` or `property` of `MemberExpression`
  - the `argument` of `SpreadElement` or `UnaryExpression`
  - the `elements` of `ArrayExpression`
  - the `properties` of `ObjectExpression`, and the `key`
    and `value` of `Property`.

## When Not To Use It

If you don't wish to restrict the contents of vue directives.
