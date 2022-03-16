# Metamask-Transaction-using-Ethereum-Web3
User can check the balance and do the transaction in his metamask account. Mainly backend is created. Api testing can be done using Postman Application

Body for api testing on postman : <br/>
Request-type : Get
Format : json
1. Transaction : 
{<br/>
    "from": user's metamask id,<br/>
    "to": Another metamask id,<br/>
    "value": amount,<br/>
    "gas": gas amount,<br/>
    "privkey": User's private key of metamask account<br/>
}
2. Balance Checking :
{<br/>
    "id": user's metamask id<br/>
}
