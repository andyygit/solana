import { Keypair } from '@solana/web3.js';

// const keypair = Keypair.generate();
// console.log(`The public key is: ${keypair.publicKey}`);
// console.log(`The secret key is: ${keypair.secretKey}`);

// // result:
// // The public key is: CzyYBvH1q6kVRoWrRH1CXsWe5E737b6m7SshA4osGubq
// // The secret key is: 95,149,151,106,231,128,13,119,81,32,253,193,51,181,79,239,27,50,71,139,126,234,81,234,102,40,185,126,198,119,28,236,178,74,150,247,236,190,51,249,150,85,206,174,219,96,191,23,110,32,34,14,25,75,95,225,103,166,138,34,25,0,140,172

// generate from secret key
const keypair = Keypair.fromSecretKey(
  Uint8Array.from([
    95, 149, 151, 106, 231, 128, 13, 119, 81, 32, 253, 193, 51, 181, 79, 239, 27, 50, 71, 139, 126, 234, 81, 234, 102,
    40, 185, 126, 198, 119, 28, 236, 178, 74, 150, 247, 236, 190, 51, 249, 150, 85, 206, 174, 219, 96, 191, 23, 110, 32,
    34, 14, 25, 75, 95, 225, 103, 166, 138, 34, 25, 0, 140, 172,
  ])
);

console.log(`The public key is: ${keypair.publicKey}`);
console.log(`The secret key is: ${keypair.secretKey}`);

// restore from seed phrase
