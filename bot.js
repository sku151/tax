const http = require("http");
const express = require("express");
const app = express();
const protax = require("pro-tax")
const Discord = require('discord.js'); 
const fetch = require('node-fetch');
const client = new Discord.Client(); 
const prefix = '-'

app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://learned-showy-flannel.glitch.me/`);
}, 280000);

function isDecimal(num) {
  return (num ^ 0) !== num;
}
client.on('ready',  () => {


console.log(`Ready ${client.user.username}`)

client.user.setActivity('-tax', { type: 'PLAYING' })
})

function getUserFromMention(mention) {
	if (!mention) return;


var number = mention

number = Math.trunc(number);
var x = (number / 19);

x += 1;

x += number;

var result = Math.trunc(x);


return result;
}

function getUserFromMention2(mention) {
	if (!mention) return;




var number = mention

number = Math.trunc(number);
var x = (number / 19);

x += 1;

x += number;

var result = Math.trunc(x);


return result;
}

function getUserFromMention1(mention) {
	if (!mention) return;




var number = mention

number = Math.trunc(number);
var x = (number / 19);

x += 1;

x -= number;

var result = Math.trunc(x);


return result;
}

client.on("message", async message => {


  if (message.content.startsWith(prefix + "tax")) {
    const number = message.content.split(" ")[1]
    if(!number)return message.channel.send("> **Please input a price**");
    if(isNaN(number)){
      return message.channel.send(`>>> :moneybag: **Final Price Without Mediator : ERROR**\n \n:moneybag: **Final Price With Mediator : ERROR**`);
    }else{

      if (!isDecimal(number)){

        return message.channel.send(`>>> :moneybag: **Final Price Without Mediator : ERROR**\n \n:moneybag: **Final Price With Mediator : ERROR**`);

      }
     

    }
    let withTax = parseInt(number) + protax.taxs(number)
    let withTaxAndWset = parseInt(number) +  protax.wset(number);
    message.channel.send(`>>> :moneybag: ** AKTEB WCH 7AB HNA HH : ${Math.floor(number - protax.taxs(number))}**\n \n:moneybag: **Final Price Without Mediator : ${Math.floor(withTax)}**\n \n:moneybag: **Final Price With Mediator : ${Math.floor(withTaxAndWset)}**`);

}
})



client.login("ODMxNTUzMTkyNDkxMzUyMTU1.YHW6Qg.6mGv-LiFZLpd43pUrRhi_9L-g4Y")
