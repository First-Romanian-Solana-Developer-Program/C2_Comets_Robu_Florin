import "dotenv/config";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

import {
  getKeypairFromEnvironment,
  airdropIfRequired,
} from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));

console.log("Connected to devnet");

const publicKey = new PublicKey("39TkHzgzPUPuidbLxcJMhoANW4CrSZ9gevHynTpVKZwM");

const balanceInLamports = await connection.getBalance(publicKey);

console.log("Done! Balance in lamports is", balanceInLamports);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL !`
);

await airdropIfRequired(
  connection,
  publicKey,
  1 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);

console.log("Airdrop done!");

const balanceInLamports2 = await connection.getBalance(publicKey);
console.log("Done! Balance in lamports after airdrop is", balanceInLamports2);

const balanceInSOL2 = balanceInLamports2 / LAMPORTS_PER_SOL;
console.log(`The balance in SOL after airdrop is ${balanceInSOL2}`);
