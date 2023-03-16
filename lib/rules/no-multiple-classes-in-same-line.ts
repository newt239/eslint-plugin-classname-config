import { TSESLint } from "@typescript-eslint/experimental-utils";

const rule: TSESLint.RuleModule<"no-multiple-classes-in-same-line", []> = {
  defaultOptions: [],
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Enforce breaking lines between multiple class names in the className prop",
      recommended: "error",
    },
    messages: {
      "no-multiple-classes-in-same-line":
        "Break lines should be used between multiple class names in the className prop",
    },
    fixable: "code",
    schema: [],
  },

  create: function (context) {
    return {
      JSXAttribute(node) {
        const { name, value } = node;
        if (
          name &&
          (name.name === "className" || name.name === "class") &&
          value &&
          value.type === "Literal" &&
          typeof value.value === "string"
        ) {
          const classNameList = value.value.split(" ");
          const hasLineBreak = classNameList.some((name) =>
            name.includes("\n")
          );
          if (!hasLineBreak) {
            const sourceCode = context.getSourceCode();
            const line = sourceCode.getLines()[value.loc.start.line - 1];
            const indentMatch = line.match(/^\s*/);
            const indent = indentMatch ? indentMatch[0] : "";
            context.report({
              node: value,
              messageId: "no-multiple-classes-in-same-line",
              fix: function (fixer) {
                const fixedClassName = classNameList
                  .map((name) => `\n${indent}  ${name.trim()}`)
                  .join("");
                return fixer.replaceText(value, `"${fixedClassName}"`);
              },
            });
          }
        }
      },
    };
  },
};

export default rule;
