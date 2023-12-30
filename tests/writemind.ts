import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Writemind } from "../target/types/writemind";
import { PublicKey, SystemProgram } from "@solana/web3.js";

describe("hello-world", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Writemind as Program<Writemind>;
  const authority = new PublicKey(
    "71G3aY7qazKzka5k1zFBCiD7HGYrEADqu5xMvXBB13dp"
  );
  const seed = "USER_STATE";
  const systemProgram = new PublicKey("11111111111111111111111111111111")

  it("Search Userprofile accounts:",async () => {
    // filter fetch
    // console.log(await program.account.userProfile.fetch("34EFeJ5fYEKRtJmDdKnYtQHwBAkxx8dZbnZ5h4yrDjgf"))
    console.log(await program.account.userProfile.all())
  })

  it("Search Postaccounts:",async () => {
    console.log(await program.account.postAccount.all())
  })
  
  it("Mic testing - Hello world", async () => {
    const userProfile = await anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from(seed), authority.toBuffer()],
      program.programId
    );

    const tx = await program.methods
      .initializeUser()
      .accounts({
        authority: authority,
        userProfile: userProfile[0],
        systemProgram: systemProgram,
      })
      .rpc();
    console.log("Your transaction signature", tx);
  });
});
