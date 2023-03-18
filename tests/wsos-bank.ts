import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { WsosBank } from "../target/types/wsos_bank";

describe("wsos-bank", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.WsosBank as Program<WsosBank>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
