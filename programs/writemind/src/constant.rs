use anchor_lang::prelude::*;

#[constant]
// "b" makes it UNICODE
pub const USER_TAG: &[u8] = b"USER_STATE";

#[constant]
pub const POST_TAG: &[u8] = b"POST_STATE";