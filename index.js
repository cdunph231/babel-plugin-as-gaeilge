module.exports = function () {
    const irishMappings = require("./irishWordMapping");

    const handleIdentifier = (path) => {
        const newName = irishMappings[path.node.name];
        if (newName) {
            path.node.name = newName;
        }
    };

    return {
        visitor: {
            Identifier: handleIdentifier,
        },
    };
};
