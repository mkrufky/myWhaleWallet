'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    WHL: "WHL",
    ETH: "ETH",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.WHL];
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
        'blockExplorerTX': 'https://explorer.whalecoin.org/transaction/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.whalecoin.org/address/[[address]]',
        'type': nodes.nodeTypes.WHL,
        'eip155': true,
        'chainId': 30375,
        'tokenList': [],
        'abiList': [],
        'estimateGas': true,
        'service': 'whalecoin.org',
        'lib': new nodes.customNode('https://mywhalewallet.com/gwhale', '443')
    }
};



nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;