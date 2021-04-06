module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "@informatica/eslint-config/esmodules",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier/react",
    ],
    plugins: ["react", "react-hooks", "jsx-a11y"],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
    },
};
