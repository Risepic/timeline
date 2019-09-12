function Client() {

    var context = this;

    context.collaterateStart = [];

    context.start = async function start() {
        delete context.start
        context.localeManager && context.localeManager.init();
        if (context.collaterateStart && context.collaterateStart.length > 0) {
            for (var i in context.collaterateStart) {
                var x = context.collaterateStart[i]();
                if(x && x.then && x.catch) {
                    await x;
                }
            }
            context.collaterateStart = [];
        }
        context.callback && context.callback()
    };

    context.init = function(callback) {
        context.callback = callback
        context.persistenceManager = new PersistenceManager();
        //context.blockchainManager = new BlockchainManager();
        context.contractsManager = new ContractsManager();
        context.userManager = new UserManager();
        setTimeout(context.start);
    };
}