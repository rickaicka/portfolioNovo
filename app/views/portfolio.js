module.exports = function(app){
    var controller = app.controllers.portfolio;
    
    app.get('/portfolio', controller.listaPortfolio);
    app.get('/portfolio/:id', controller.casePortfolio);
}