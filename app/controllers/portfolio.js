var cases =  [
            {_id: 1, nome:"Site Portfolio", tipo: "site", class:"site"},
            {_id: 2, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema"},
            {_id: 3, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema"},
            {_id: 4, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema"},
            {_id: 5, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema"},
            {_id: 6, nome:"Sistema Controle Financeiro", tipo: "sistema", class:"sistema"}
        ];

module.exports = function(){
    var controller = {};
    controller.listaPortfolio = function(req, res){
        res.json(cases);            
    };
    
    controller.casePortfolio = function(req, res){
        var idCasePortfolio = req.params.id;
        var casePortfolio = cases.filter(function(casePortfolio){
            return casePortfolio._id == idCasePortfolio;
        })[0];
        casePortfolio ? res.json(casePortfolio) : res.status(404).send('Case não encontrado');
    };
    
    
    
    return controller;
}