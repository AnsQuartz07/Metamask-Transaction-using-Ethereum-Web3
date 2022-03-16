# Metamask-Transaction-using-Ethereum-Web3
User can check the balance and do the transaction in his metamask account. Mainly backend is created. Api testing can be done using Postman Application

Body for api testing on postman : <br/>
Request-type : Get
Format : json
1. Transaction : 
{
    "from": user's metamask id,
    "to": Another metamask id,
    "value": amount,
    "gas": gas amount,
    "privkey": User's private key of metamask account
}
2. Balance Checking :
{
    "id": user's metamask id
}
