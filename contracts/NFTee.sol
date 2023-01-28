// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import the standard implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// contract NFTee is an "ERC721" contract

contract NFTee is ERC721{
    // creatre an ERC 721 contract
    // Mint some NFT's for myself
    constructor() ERC721("smit's NFT","Smit's NFT"){
        // mint will get the token id for us, argument are address to and token id 
        // token ids for NFT's are always unique
        // mint 6 NFT's to myself
        _mint(msg.sender,1);
        _mint(msg.sender,2);
        _mint(msg.sender,3);
        _mint(msg.sender,4);
        _mint(msg.sender,5);
        _mint(msg.sender,6);
          
    }
}