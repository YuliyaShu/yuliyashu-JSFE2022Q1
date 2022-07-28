module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "overrides": [
        {
            "files": ['*.ts', '*.tsx'],
            "extends": [
                "airbnb",
                "airbnb-typescript"
            ],
            "parserOptions": {
                "ecmaVersion": "latest",
                "sourceType": "module",
                "project": ["./tsconfig.json"],
            },
        }
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-debugger": "off",
        "no-console": 0,
        "class-methods-use-this": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": ["error"],
        "import/prefer-default-export": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "should", "has", "can", "did", "will"]
            },
        ],
        "linebreak-style": 0
    }
}
