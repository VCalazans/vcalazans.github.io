function limpaCampos(){
    $(document).ready(function(){
        $('input[name="nome"]').val('');
        $('input[name="email"]').val('');
        $('input[name="telefone"]').val('');
        $('input[name="celular"]').val('');
        $('input[name="assunto"]').val('');
        $('textarea[name="cxMensagem"]').val('');
    });
}