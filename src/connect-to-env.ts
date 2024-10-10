// https://www.quicknode.com/guides/solana-development/getting-started/how-to-create-websocket-subscriptions-to-solana-blockchain-using-typescript
import { Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const SECRET_KEY = process.env.SECRET_KEY;
const my_key = SECRET_KEY ? SECRET_KEY.split(',').map((i) => parseInt(i)) : false;
const HTTP_ENDPOINT = 'http://127.0.0.1:8899';
// const WSS_ENDPOINT = 'ws://127.0.0.1:8900';

const connect = async () => {
  if (my_key) {
    const keypair = Keypair.fromSecretKey(Uint8Array.from(my_key));
    const connection = new Connection(HTTP_ENDPOINT, 'confirmed');
    // const connection = new Connection(HTTP_ENDPOINT, { wsEndpoint: WSS_ENDPOINT });
    const signatureAirdrop = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL * 4);
    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature: signatureAirdrop,
    });
    console.log(blockhash);
    console.log(lastValidBlockHeight);
    console.log(signatureAirdrop);
  } else {
    console.log('No --env-vile was provided in command, cannot run');
  }
};

connect();
