import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Writemind } from "../target/types/writemind";
import { PublicKey } from "@solana/web3.js";

describe("hello-world", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Writemind as Program<Writemind>;
  const authority = new PublicKey(
    "71G3aY7qazKzka5k1zFBCiD7HGYrEADqu5xMvXBB13dp"
  );
  const USER_TAG = "USER_STATE";
  const systemProgram = new PublicKey("11111111111111111111111111111111");

  it("Initialize User Profile", async () => {
    const userProfile = await anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from(USER_TAG), authority.toBuffer()],
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

  it("Add post", async () => {
    const data = await program.account.userProfile.all();
    const POST_TAG = "POST_STATE";

    // grab publicKey from UserAccount from the fetchall of UserProfiles
    const userProfile = data[0].publicKey.toString();

    // Create u8 lastPost Buffer
    const lastPostValue = data[0].account.lastPost;
    const lastPost: Buffer = Buffer.from([lastPostValue])

    const postAccount = await anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(POST_TAG),
        authority.toBuffer(),
        Buffer.from(lastPost),
      ],
      program.programId
    );

    const tx = await program.methods
      .addPost("Hello World! 2")
      .accounts({
        authority: authority,
        userProfile: userProfile,
        postAccount: postAccount[0],
        systemProgram: systemProgram,
      })
      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Search Userprofile accounts:", async () => {
    // filter fetch
    // console.log(await program.account.userProfile.fetch("34EFeJ5fYEKRtJmDdKnYtQHwBAkxx8dZbnZ5h4yrDjgf"))
    const data = await program.account.userProfile.all();
    console.log(data);
  });

  it("Search Postaccounts:", async () => {
    console.log(await program.account.postAccount.all());
  });
});
