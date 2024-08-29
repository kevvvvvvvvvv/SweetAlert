$("#btn-1").click(function(){
    Swal.fire("Hola mundo");
});

$("#btn-2").click(function(){
    Swal.fire({
        icon:'error',
        title:"Error",
        text:"Texto de prueba"
    });
});

$("#btn-3").click(function(){
    Swal.fire({
        imageUrl:'images/nyan-cat.gif',
        imageHeight:300
    });
});

$("#btn-4").click(function(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timerProgressBar:true,
        toast:true,
        timer: 1500
      });
});
