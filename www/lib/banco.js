// This imudança de telas a JavaScript file
//ações de pagina
$(document).on("click","#listar", function(){
  $(location).attr("href","listar.html");
});
//ações de banco
$(document).on("click", "#salvar",function(){
  var parametros ={
  "nome":$("#nome").val(),
  "email":$("#email").val(),
  "senha":$("#senha").val()
  }

  $.ajax({
    type:"post",//metodo
    url:"https://wordpress-online-2.000webhostapp.com/webservice/cadastra.php",//para onde
    data: parametros,//o que enviar
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
    url:"https://wordpress-online-2.000webhostapp.com/webservice/listar.php",
    datatype:"json",//o que vou receber ou comoi vou receber
    success: function(data){
      var itemlista = "";
      $.each(data.pessoas, function(i,dados){
        itemlista += "<option value="+dados.codigo+">"+dados.nome+"</option>";
      });
      $("#listaPessoas").html(itemlista);
    },
    error: function(data){
      navigator.notification.alert("Erro no cadastro");
    }
  });
}

$(document).on("change", "#listaPessoas", function(){
  var parametros = {
    "codigo" : $("optionselected", ("#listaPessoas")).val() 
  }

  $.ajax({
    type:"post",
    url:"https://wordpress-online-2.000webhostapp.com/webservice/listar-um-registro.php",
    data: parametros,
    datatype:"json",//o que vou receber ou comoi vou receber
    success: function(data){
      $("#codigo").val(data.pessoa.codigo);
      $("#nome").val(data.pessoa.nome);
      $("#email").val(data.pessoa.email);
      $("#senha").val(data.pessoa.senha);
    },
    error: function(data){
      navigator.notification.alert("Erro no cadastro");
    }
  });
});

function liberarCampos(){
  $("#nome").prop("readonly",false);
  $("#email").prop("readonly",false);    
  $("#senha").prop("readonly",false);
}
function desabilitarCampos(){
  $("#nome").prop("readonly",true);
  $("#email").prop("readonly",true);    
  $("#senha").prop("readonly",true);
}

$(document).on("click","#editar",function(){
  liberarCampos();
});

$(document).on("click","#cancelar",function(){
  desabilitarCampos();
});


$(document).on("click","#salvarEdit",function(){
  var parametros ={
  "codigo":$("#codigo").val(),
  "nome":$("#nome").val(),
  "email":$("#email").val(),
  "senha":$("#senha").val()
  }
  $.ajax({
    type:"post",
    url:"https://wordpress-online-2.000webhostapp.com/webservice/atualiza.php",
    data: parametros,
    success:function(data){
      navigator.notification.alert(data);
      location.reload();
    },
    // der errado
    error: function(data){
      navigator.notification.alert("Erro no cadastro");
    }
  });
});

$(document).on("click","#excluir",function(){
  var parametros ={
  "codigo":$("#codigo").val(),
  }
  $.ajax({
    type:"post",
    url:"https://wordpress-online-2.000webhostapp.com/webservice/delete.php",
    data: parametros,
    success:function(data){
      navigator.notification.alert(data);
      location.reload();
      desabilitarCampos();
    },
    error: function(data){
      navigator.notification.alert("Erro no cadastro");
    }
  });
})