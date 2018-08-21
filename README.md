# The-Unsinkable-Project
## The Unsinkable Project intends to make crypto beginner-friendly.
The Unsinkable ICO Standard (TUIS) intends to protect the general public from deceptive and/or predatory ICO tokenomics.
In order to do this, Unsinkable coins/tokens must be asset-backed and redeemable for ICO price.
The circulating supply and buyback offering must be immutably managed by smart contract.
We are building nodejs API implementations to make this process automatic, as a proof of concept.
We will try to make them as immutable and trustless as possible, but Stellar Smart Contracts (SSCs) are not turing-complete.
We are currently using an AWS server for implementation.

I am not a coder. This is my first time using Git, GitHub, and AWS.  
Please bare with me while I learn.  
I have hired an experienced full stack SSC developer.  

I am experienced with collaborative projects, but new to javascript and coding.

### Intended Mechanics
What is the semantic for how you are going to use your repository?
I am still learning "commits," and the jargon of coding and GitHub.  
Anyways, I was thinking that the main branch of the repository should be for fully tested, currently deployed on Stellar mainnet code. (master)  
Then I think we will need a branch for code that is undergoing security review and is currently deployed on Stellar testnet. (Unsinkable-HODL-Wallet)  
Then we probably need a branch for in-development, not ready for deployment yet.  
We might need another branch depending on how we deploy, ie GitHub pages and/or AWS. (gh-pages)  

The nodejs Stellar API implementations are currently deployed on The Unsinkable Project's AWS server, running on Stellar testnet and available for review.  
https://www.unsinkable.io/hodl-wallet  
http://www.wallet.unsinkable.io  

This repository is intended to fulfill the deliverable requirements for 2 Stellar Smart Contracts (SSCs)  
#### HODL Wallet SSC - 2.5/9 ~ 28%  - 9 Deliverables - 2 Working (W) - 1 In-Progress (IP) - 6 Not-Started (NS)  
    Coding stack libraries (nodejs) and encrypted AWS database - W  
    UI and testnet alpha - W  
    Automatic Token Buyback - IP  
    Allow Unsinkable Company Token Sale -NS  
    Price-Lock HODL Escrow (token holder frontend) - NS  
    Price-Lock HODL Escrow (Unsinkable tokenomic backend) - NS  
    Time-Lock HODL Escrow (token holder frontend) - NS  
    Time-Lock HODL Escrow (Unsinkable tokenomic backend) - NS  
    Stellar asset (tokenized BTC, ETH, LTC) trading and conversion - NS  

#### UNSK SSC - 0.5/9 ~ 5% - 9 Deliverables - 0 Working (W) - 1 In-Progress (IP) - 8 Not-Started (NS)  
    Immutable Crowdfunding Token Distribution - NS  
    stellar.tomls - IP  
    Instant Escrow - NS  
    Participate in ICO - NS  
    HODL Votes - NS  
    Advanced Instant Escrow - NS  
    PICOUNSK Crowdfunding Escrow - NS  
    PICOUNSK - UNSK Airdrop Methodology - NS  
    Summon Buywall API - NS  
