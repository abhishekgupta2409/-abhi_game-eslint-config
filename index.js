module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:promise/recommended",
    ],
    plugins: ["prettier", "promise"],
    rules: {
        "prettier/prettier": "warn",
        "no-unused-vars": "warn",
        "no-console": "warn",
        "import/order": "off",
    },
};
