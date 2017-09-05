'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    WHL: "WHL",
    Custom: "CUSTOM WHL"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'whl': {
        'name': 'WHL',
        'blockExplorerTX': 'https://explorer.whalecoin.org/#/transaction/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.whalecoin.org/#/address/[[address]]',
        'type': nodes.nodeTypes.WHL,
        'eip155': true,
        'chainId': 30375,
        'tokenList': require('./tokens/whlTokens.json'),
        'abiList': require('./abiDefinitions/whlAbi.json'),
        'estimateGas': true,
        'service': 'whalecoin.org',
        'lib': new nodes.customNode('http://0.0.0.0', '8545')      
    },
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
