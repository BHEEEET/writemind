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

    pub fn add_post(_ctx: Context<AddPost>, _content: String) -> Result<()> {
        // Initialize variables
        let post_account = &mut _ctx.accounts.post_account;
        let user_profile = &mut _ctx.accounts.user_profile;
        
        post_account.authority = _ctx.accounts.authority.key();
        post_account.idx = user_profile.last_post;
        post_account.content = _content;

        // Increase idx for PDA
        user_profile.last_post = user_profile.last_post
        .checked_add(1)
        .unwrap();

        // Increaes total post count
        user_profile.posts_count = user_profile.posts_count
        .checked_add(1)
        .unwrap();

        Ok(())
    }

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

#[derive(Accounts)]
#[instruction()]
pub struct AddPost<'info>{
    #[account(
        mut,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        has_one = authority
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(
        init,
        seeds = [POST_TAG, authority.key().as_ref(), &[user_profile.last_post as u8].as_ref()],
        bump,
        payer = authority,
        space = std::mem::size_of::<PostAccount>() + 8,
    )]

    pub post_account: Box<Account<'info, PostAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
    
}
