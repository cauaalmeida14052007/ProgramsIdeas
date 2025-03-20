async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        document.getElementById('btc-price').textContent = `$${data.bitcoin.usd}`;
    } catch (error) {
        console.error('Erro ao buscar preço:', error);
    }
}

// Chama a função imediatamente e define atualização a cada 60 segundos
fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 1000);




async function fetchEthereumPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        document.getElementById('eth-price').textContent = `$${data.ethereum.usd}`;
    } catch (error) {
        console.error('Erro ao buscar preço:', error);
    }
}

// Chama a função imediatamente e define atualização a cada 60 segundos
fetchEthereumPrice();
setInterval(fetchEthereumPrice, 1000);


