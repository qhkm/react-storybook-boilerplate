import { configure, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

// Load stories
const req = require.context("../src", true, /\.*.stories\.(js|jsx|mdx)$/);

configure(req, module);

// Add parameters
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage
    }
});
