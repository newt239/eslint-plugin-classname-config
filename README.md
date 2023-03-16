# eslint-plugin-classname-config

Enforce breaking lines between multiple class names in the className prop.

## Example

Tailwind is very difficult to read because of the horizontal sequence of class names. This ESLint Plugin breaks each class name into a new line.

### before

```jsx
const Invalid = () => {
  return <div className="text-3xl font-bold underline" />;
};

export default Invalid;
```

### after

```jsx
const Invalid = () => {
  return (
    <div
      className="
            text-3xl
            font-bold
            underline"
    />
  );
};

export default Invalid;
```

Welcome to bug reports and feature improvements from Issues or Pull Request.

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
