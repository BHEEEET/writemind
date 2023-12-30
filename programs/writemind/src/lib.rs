use anchor_lang::prelude::*;

pub mod constant;
pub mod error;
pub mod states;
use crate::{constant::*, error::*, states::*};

declare_id!("GqN1sq6Y38DXgwHd2tZVGaBEyjUsphu48W4gt6BeXu7S");

#[program]
pub mod writemind {
    // brings into scope
    use super::*;

    pub fn initialize_user(ctx: Context<InitializeUser>) -> Result<()> {
        let user_profile = &mut ctx.accounts.user_profile;
        user_profile.authority = ctx.accounts.authority.key();
        user_profile.last_post = 0;
        user_profile.posts_count = 0;

        Ok(())
    }

    // pub fn add_post(_ctx: Context<AddPost>) -> Result<()> {
    //     Ok(())
    // }

    // pub fn remove_post(_ctx: Context<RemovePost>) -> Result<()> {
    //     Ok(())
    // }
}
#[derive(Accounts)]
#[instruction()]
pub struct InitializeUser<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<UserProfile>(),
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    pub system_program: Program<'info, System>
}
