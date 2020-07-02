// This imudança de telas a JavaScript file
//ações de pagina
$(document).on("click","#listar", function(){
  $(location).attr("href","listar.html");
});
//ações de banco
$(document).on("click", "#salvar",function(){
  var paramentros ={
  "nome":$("#nome").val(),
  "email":$("#email").val(),
  "senha":$("#senha").val()
  }

  $.ajax({
    type:"post",//metodo
    url:"https://wordpress-online-2.000webhostapp.com/webservice/cadastra.php",//para onde
    data:parametros,//o que enviar
    //se der certo
    success:function(data){
      navigator.notification.alert(data);
      $("#nome").val(""),
      $("#email").val(""),
      $("#senha").val("")
    },
    // der errado
    error: function(data){
      navigator.notification.alert("Erro no cadastro");
    }
  });
});

function listar(){
  $.ajax({
    type:"post",
    url:"https://wordpress-online-2.000webhostapp.com/webservice/cadastra.php",
    datatype:"json",//o que vou receber ou comoi vou receber
    success: function(data){
      var itemista = "";
      $.each(data.pessoas, function(i,dados){
        itemlista += "<option value="+dados.codigo+">"+dados.nome+"</option>";
      });
      $("#listarPessoas").html(itemista);
    },
    error: function(data){
      navigator.notification.alert("Erro no cadastro");
    }
  });
}