use anchor_lang::prelude::*;


declare_id!("GqN1sq6Y38DXgwHd2tZVGaBEyjUsphu48W4gt6BeXu7S");

#[program]
pub mod hello_world {
    use super::*;
    pub fn hello_world(_ctx: Context<Initialize>) -> Result<()> {
        msg!("Hello world, from solana smart contract.");
        Ok(())
    }
}
#[derive(Accounts)]
pub struct Initialize {}