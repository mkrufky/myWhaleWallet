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
        'blockExplorerTX': 'https://explorer.whalecoin.org/#/transaction/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.whalecoin.org/#/address/[[address]]',
        'type': nodes.nodeTypes.WHL,
        'eip155': true,
        'chainId': 30375,
        'tokenList': [],
        'abiList': [],
        'estimateGas': true,
        'service': 'whalecoin.org',
        'lib': new nodes.customNode('http://52.200.96.146', '8545')
    },
    'eth_mew': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherapi.com/eth', '')
    }
};



nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;