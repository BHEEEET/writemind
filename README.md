start own testnet:
```
solana-test-validator
```

change the api cluster:
```
solana config set --url localhost
```

see activity:
```
solana logs
```

init:
```
cargo init hello_world 
cargo add solana-program

anchor init hello_world
```

build:
```
cargo build-bpf

anchor build
```

deploy:
```
solana program deploy ./target/deploy/hello_world.so

anchor deploy
```

local testnet explorer:
 https://explorer.solana.com/?cluster=custom&customUrl=http%3A%2F%2F127.0%3A8899
 
 https://github.com/coral-xyz/anchor/issues/1912
![[Pasted image 20231229194258.png]]

get program_id:
```
anchor keys list
```

add program_id to `/target/idl/hello_world.json`:
```json
,
"metadata":
{"address": "progam_id"}
```

test contract:
```bash
anchor test 
 
#if you already have test-validator running
anchor run test
```