var nodemailer = require('nodemailer');

module.exports = function(app){    
    
    
    app.get('/contato', function(req, res){
        res.render('contato', {
            title: 'Contato',
            page: 'contato',
            message: req.body.message,
            email: req.body.email,
            name: req.body.name,
            telefone: req.body.telefone
        });
    });
    app.post('/envio', function(req, res){
        var smtpOpts, smtpTrans;
        
        smtpTrans = nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                user: 'rikrdo.g4t0@gmail.com',
                pass: 'circo030672lu'
            }
        });
        
        smtpOpts = {
            from: req.body.name + ' < ' + req.body.email + ' > ',
            to: 'ricardosalim7@hotmail.com',
            subject: 'Contato do Site Daruix Tecnologia',
            text:'Nome: ' + req.body.name + '\nE-mail: ' + req.body.email + `\nTelefone: ` + req.body.telefon + `\nMensagem: ` + req.body.message
        }
        
        smtpTrans.sendMail(smtpOpts, function(error, info){
           
            if(error){
                console.log(error);
                res.render('contato', {
                    title: 'Contato',
                    page: 'contato',
                    message: req.body.message,
                    email: req.body.email,
                    name: req.body.name,
                    telefone: req.body.telefone
                });
            }else{
                console.log('E-mail enviado');
                res.render('contato', {
                    title: 'Contato',
                    page: 'contato',
                    message: req.body.message,
                    email: req.body.email,
                    name: req.body.name,
                    telefone: req.body.telefone  
                });
            }
        });
    });
};
