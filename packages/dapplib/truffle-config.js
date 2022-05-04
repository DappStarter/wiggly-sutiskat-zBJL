require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name rifle still minor inflict force fringe general'; 
let testAccounts = [
"0xdc9cd69e5b8a5f17ac8648fecacc352cb4331bbb700917500d7e684df8d90973",
"0x544123ab0f2862bc78f3aab8942d90c9f8f29643db49e3ea93a7eb7f798b764b",
"0xc02d697ff6d10d5cadb2c6e29b73dfe96f8f25217122911fb32f260edc298453",
"0xfa928af6e3c5bb0ea68cd3647909d29b5e1e61ac8eb02563199214892bde8855",
"0x7ea31c586e80cd66e502c25cba81111bb5cb93d393a6facbc4e10d0c329db0fc",
"0x3941135294e63b9c52c4377886ceda9be0e55fd94b0e5776f6c88a1eeccf8f5e",
"0x45db7e1177e0f8798c5451be8337e27dc0f59f8024225816ba41b6c70b3863c1",
"0x6c7f346789d0032d1e8176f168abe38815f3a442be45c713e610214836c95b12",
"0xd714f8bc2cd84a272dfb43cc7310840abf0bbb1d0e14663fc8695096bb2624bf",
"0x2646e26998d0379bc8030a8964929cc13c21e87a955a6d428b66a983d3fd0d61"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

