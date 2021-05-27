require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rifle machine history half civil army ghost'; 
let testAccounts = [
"0x88b0dd9b0516903fa968e181602df698d1d798a3435e8bdedb800059426ac138",
"0x37d7f1d6aac524f519b6f32a35bd1f34a2dcbd8910dc25eab416c1152c9284ea",
"0xff3a7b42e63ce47de99fa2afbc10ca3f19a0fb952789f0017676cc0ef667319b",
"0x8f3ae4234631e23dc1f6714d67e9db0318b3967fe29a7d39bdd51829c889b54b",
"0xefbf889247da28518f20861abe55fd0925bd0bfada72af2ece8f3544673b0270",
"0x7203455521c9d1f3e865abf05bad6252769df50ac7b0b5132676316ce21cf9ca",
"0xb03751a0bf15208ac0eba1ec803c3aa0d26153777deb79dd20016012064572c5",
"0x7af9e4a431f6bee022991440ca3694fa3957f8daa16ae55e93ccbcb393f4cad4",
"0xe15910c3f3541ed6fdfcded2ec18ec38ca86aeed7a6fc878675e2c286e59aaa3",
"0x5d003ae0780f6cc51587a8787838a106370717f04eb899910fb5b12359d084d3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

