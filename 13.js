async function getMessage() {
    return "Data received successfully";
}

async function main() {
    let result = await getMessage();
    console.log(result);
}

main();