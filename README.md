# eslint-plugin-classname-config

Enforce breaking lines between multiple class names in the className prop.

## Installation

```bash
npm install eslint eslint-plugin-classname-config --save-dev
```

## Usage

Add below code to `.eslintrc.js`.

```js
{
  "plugins": ["classname-config"],
	"rules": {
		"classname-config/no-multiple-classes-in-same-line": "error"
	}
}
```
