// https://www.quicknode.com/guides/solana-development/getting-started/how-to-create-websocket-subscriptions-to-solana-blockchain-using-typescript
import { Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const HTTP_ENDPOINT = 'http://127.0.0.1:8899';
// const WSS_ENDPOINT = 'ws://127.0.0.1:8900';

const connect = async () => {
  const keypair = Keypair.generate();
  const connection = new Connection(HTTP_ENDPOINT, 'confirmed');
  // const connection = new Connection(HTTP_ENDPOINT, { wsEndpoint: WSS_ENDPOINT });
  const signature = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL);
  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
  await connection.confirmTransaction({
    blockhash,
    lastValidBlockHeight,
    signature,
  });
  console.log(blockhash);
  console.log(lastValidBlockHeight);
  console.log(signature);
};

connect();
