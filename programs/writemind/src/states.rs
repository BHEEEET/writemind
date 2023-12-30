use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct UserProfile{
    pub authority: Pubkey,
    pub last_post: u8,
    pub posts_count: u8
}

#[account]
#[derive(Default)]
pub struct PostAccount {
    pub authority: Pubkey,
    pub idx: u8,
    pub content: String,
}