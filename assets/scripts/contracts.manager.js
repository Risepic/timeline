function ContractsManager() {
    var context = this;

    context.tokenBalanceOf = async function tokenBalanceOf(contract, address) {
        return await context.call(contracts.Token, contract, 'balanceOf', address);
    };

    context.call = async function call() {
        var contractType = arguments[0];
        var address = arguments[1];
        var methodName = arguments[2];
        var args = [];
        if (arguments.length > 3) {
            for (var i = 3; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
        }

        var outputs = undefined;

        try {
            outputs = Enumerable.From(Enumerable.From(contractType).Where(it => it.type === 'function' && it.name === methodName && ((!it.inputs && args.length === 0) || it.inputs.length === args.length)).First().outputs).Select(it => it.type).ToArray();
        } catch (e) {
            console.error(e);
        }

        var contract = new web3.eth.Contract(contractType);
        var method = contract.methods[methodName].apply(contract, args);
        var result = await client.blockchainManager.call(address, method.encodeABI());
        if (!outputs || outputs.length === 0) {
            return;
        }
        result = web3.eth.abi.decodeParameters(outputs, result);
        return ((result.__length__ || Object.keys(result).length) > 1 ? result : result['0']);
    };

    context.submit = async function submit() {
        var title = arguments[0];
        var contractType = arguments[1];
        var address = arguments[2];
        var methodName = arguments[3];
        var args = [];
        if (arguments.length > 4) {
            for (var i = 4; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
        }
        var contract = new web3.eth.Contract(contractType);
        var method = undefined;
        var value = undefined;
        try {
            method = contract.methods[methodName].apply(contract, args);
        } catch (e) {
            value = args.pop();
            method = contract.methods[methodName].apply(contract, args);
        }
        var signedTransaction = await client.userManager.signTransaction(address, method.encodeABI(), value);
        return await client.blockchainManager.sendSignedTransaction(signedTransaction, title);
    };
}